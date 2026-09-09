import { copyFile, cp, mkdir } from "node:fs/promises"
import path from "node:path"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"

const require = createRequire(import.meta.url)
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDirectory, "..")
const katexRoot = path.dirname(require.resolve("katex/package.json"))
const sourceDirectory = path.join(katexRoot, "dist")
const targetDirectory = path.join(projectRoot, "public", "static", "katex")
const vendorDirectory = path.join(projectRoot, "public", "static", "vendor")

await mkdir(targetDirectory, { recursive: true })
await copyFile(
  path.join(sourceDirectory, "katex.min.css"),
  path.join(targetDirectory, "katex.min.css"),
)
await copyFile(
  path.join(sourceDirectory, "contrib", "copy-tex.min.js"),
  path.join(targetDirectory, "copy-tex.min.js"),
)
await copyFile(path.join(katexRoot, "LICENSE"), path.join(targetDirectory, "LICENSE"))
await cp(path.join(sourceDirectory, "fonts"), path.join(targetDirectory, "fonts"), {
  recursive: true,
  force: true,
})
await mkdir(vendorDirectory, { recursive: true })
await copyFile(
  path.join(projectRoot, "node_modules", "d3", "dist", "d3.min.js"),
  path.join(vendorDirectory, "d3.min.js"),
)
await copyFile(
  path.join(projectRoot, "node_modules", "pixi.js", "dist", "pixi.js"),
  path.join(vendorDirectory, "pixi.js"),
)

console.log("Prepared local KaTeX, D3, and PixiJS assets")
