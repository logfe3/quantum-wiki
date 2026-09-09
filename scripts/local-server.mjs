import { createServer } from "node:http"
import { appendFile, mkdir, readFile, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const defaultRoot = path.resolve(scriptDirectory, "..", "public")

function parseArguments(values) {
  const parsed = new Map()
  for (let index = 0; index < values.length; index += 1) {
    const key = values[index]
    if (!key.startsWith("--")) continue
    const value = values[index + 1]
    if (value && !value.startsWith("--")) {
      parsed.set(key.slice(2), value)
      index += 1
    } else {
      parsed.set(key.slice(2), "true")
    }
  }
  return parsed
}

const options = parseArguments(process.argv.slice(2))
const root = path.resolve(options.get("root") ?? defaultRoot)
const host = options.get("host") ?? "127.0.0.1"
const port = Number.parseInt(options.get("port") ?? "8088", 10)
const logFile = options.has("log-file") ? path.resolve(options.get("log-file")) : null

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("Port must be an integer between 1 and 65535")
}

await stat(root).catch(() => {
  throw new Error("Static site directory does not exist: " + root)
})

const indexDocument = await readFile(path.join(root, "index.html"), "utf8").catch(() => "")
const basePathMatch = indexDocument.match(/\bdata-basepath=["']([^"']*)["']/)
const configuredBasePath = basePathMatch?.[1]?.trim() ?? ""
const basePath =
  configuredBasePath.startsWith("/") && !configuredBasePath.includes("..")
    ? configuredBasePath.replace(/\/+$/, "")
    : ""

if (logFile) {
  await mkdir(path.dirname(logFile), { recursive: true })
}

async function log(message) {
  const line = new Date().toISOString() + " " + message
  console.log(line)
  if (logFile) {
    await appendFile(logFile, line + "\n", "utf8").catch((error) => {
      console.error("Unable to append server log:", error.message)
    })
  }
}

const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webmanifest", "application/manifest+json"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
])

function isInsideRoot(candidate) {
  const relative = path.relative(root, candidate)
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative))
}

async function findFile(requestPath) {
  const relativePath = requestPath.replace(/^[/\\]+/, "")
  const normalized = path.normalize(relativePath)
  if (normalized === ".." || normalized.startsWith(".." + path.sep)) return null

  const base = path.resolve(root, normalized)
  if (!isInsideRoot(base)) return null

  let candidates
  if (relativePath === "") {
    candidates = [path.join(root, "index.html")]
  } else if (requestPath.endsWith("/")) {
    candidates = [path.join(base, "index.html")]
  } else if (path.extname(base)) {
    candidates = [base]
  } else {
    candidates = [base + ".html", path.join(base, "index.html"), base]
  }

  for (const candidate of candidates) {
    if (!isInsideRoot(candidate)) continue
    const info = await stat(candidate).catch(() => null)
    if (info?.isFile()) return candidate
  }
  return null
}

const server = createServer(async (request, response) => {
  response.setHeader("X-Content-Type-Options", "nosniff")

  let url
  try {
    url = new URL(request.url ?? "/", "http://" + (request.headers.host ?? host))
  } catch {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" })
    response.end("Bad request")
    return
  }

  if (url.pathname === "/__health") {
    const payload = JSON.stringify({ status: "ok", host, port })
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Content-Length": Buffer.byteLength(payload),
    })
    response.end(request.method === "HEAD" ? undefined : payload)
    return
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, {
      "Content-Type": "text/plain; charset=utf-8",
      Allow: "GET, HEAD",
    })
    response.end("Method not allowed")
    return
  }

  let requestPath
  try {
    requestPath = decodeURIComponent(url.pathname)
  } catch {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" })
    response.end("Bad request")
    return
  }

  if (basePath && (requestPath === basePath || requestPath.startsWith(basePath + "/"))) {
    requestPath = requestPath.slice(basePath.length) || "/"
  }

  let filePath = await findFile(requestPath)
  let statusCode = 200
  if (!filePath) {
    filePath = path.join(root, "404.html")
    statusCode = 404
  }

  try {
    const body = await readFile(filePath)
    const extension = path.extname(filePath).toLowerCase()
    const contentType = mimeTypes.get(extension) ?? "application/octet-stream"
    const cacheControl =
      extension === ".html" || extension === ".json"
        ? "no-cache"
        : "public, max-age=86400, immutable"
    response.writeHead(statusCode, {
      "Content-Type": contentType,
      "Content-Length": body.byteLength,
      "Cache-Control": cacheControl,
    })
    response.end(request.method === "HEAD" ? undefined : body)
  } catch (error) {
    await log("Request failed for " + requestPath + ": " + error.message)
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
    response.end("Internal server error")
  }
})

server.keepAliveTimeout = 5_000

server.on("error", async (error) => {
  await log("Server error: " + error.message)
  process.exitCode = 1
})

server.listen(port, host, () => {
  void log("Quantum Thesis Wiki listening at http://" + host + ":" + port + "/")
})

function shutDown(signal) {
  void log("Received " + signal + ", shutting down")
  server.close(() => process.exit(0))
}

process.on("SIGINT", () => shutDown("SIGINT"))
process.on("SIGTERM", () => shutDown("SIGTERM"))
