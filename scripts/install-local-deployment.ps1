[CmdletBinding()]
param(
  [ValidateRange(1, 65535)]
  [int]$Port = 8088
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$taskName = "QuantumThesisWiki"
$projectRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot "..")).Path
$serverScript = Join-Path $projectRoot "scripts\local-server.mjs"
$publicRoot = Join-Path $projectRoot "public"
$stateDirectory = Join-Path $projectRoot ".local-deploy"
$logFile = Join-Path $stateDirectory "server.log"
$deploymentFile = Join-Path $stateDirectory "deployment.json"
$nodePath = (Get-Command node.exe -ErrorAction Stop).Source
$currentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name

$existingTask = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
if ($existingTask -and $existingTask.State -eq "Running") {
  Stop-ScheduledTask -TaskName $taskName
  Start-Sleep -Milliseconds 750
}

$listeners = @(Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue)
if ($listeners.Count -gt 0) {
  $processIds = ($listeners | Select-Object -ExpandProperty OwningProcess -Unique) -join ", "
  throw "Port $Port is already in use by process ID(s): $processIds"
}

Write-Host "Building the Quartz site..."
& $nodePath (Join-Path $projectRoot "quartz\bootstrap-cli.mjs") build
if ($LASTEXITCODE -ne 0) {
  throw "Quartz build failed with exit code $LASTEXITCODE"
}
& $nodePath (Join-Path $projectRoot "scripts\prepare-local-assets.mjs")
if ($LASTEXITCODE -ne 0) {
  throw "Local asset preparation failed with exit code $LASTEXITCODE"
}

New-Item -ItemType Directory -Force -Path $stateDirectory | Out-Null

$quote = [char]34
$serverArguments =
  "$quote$serverScript$quote --root $quote$publicRoot$quote --host 127.0.0.1 --port $Port --log-file $quote$logFile$quote"

$actionParameters = @{
  Execute = $nodePath
  Argument = $serverArguments
  WorkingDirectory = $projectRoot
}
$action = New-ScheduledTaskAction @actionParameters
$trigger = New-ScheduledTaskTrigger -AtLogOn -User $currentUser
$settingsParameters = @{
  AllowStartIfOnBatteries = $true
  DontStopIfGoingOnBatteries = $true
  ExecutionTimeLimit = [TimeSpan]::Zero
  RestartCount = 3
  RestartInterval = (New-TimeSpan -Minutes 1)
  MultipleInstances = "IgnoreNew"
}
$settings = New-ScheduledTaskSettingsSet @settingsParameters
$principalParameters = @{
  UserId = $currentUser
  LogonType = "Interactive"
  RunLevel = "Limited"
}
$principal = New-ScheduledTaskPrincipal @principalParameters
$taskParameters = @{
  Action = $action
  Trigger = $trigger
  Settings = $settings
  Principal = $principal
  Description = "Serve the local Quantum Thesis Wiki on 127.0.0.1:$Port"
}
$definition = New-ScheduledTask @taskParameters

Register-ScheduledTask -TaskName $taskName -InputObject $definition -Force | Out-Null
Start-ScheduledTask -TaskName $taskName

$url = "http://127.0.0.1:$Port/"
$healthUrl = "http://127.0.0.1:$Port/__health"
$healthy = $false
for ($attempt = 0; $attempt -lt 30; $attempt += 1) {
  Start-Sleep -Milliseconds 500
  try {
    $health = Invoke-RestMethod -Uri $healthUrl -TimeoutSec 2
    if ($health.status -eq "ok") {
      $healthy = $true
      break
    }
  } catch {
    # The scheduled task may still be starting.
  }
}

if (-not $healthy) {
  $taskInfo = Get-ScheduledTaskInfo -TaskName $taskName
  throw "Local server did not become healthy. LastTaskResult=$($taskInfo.LastTaskResult). See $logFile"
}

$deployment = [ordered]@{
  taskName = $taskName
  url = $url
  host = "127.0.0.1"
  port = $Port
  projectRoot = $projectRoot
  nodePath = $nodePath
  installedAt = (Get-Date).ToString("o")
}
$deployment | ConvertTo-Json | Set-Content -LiteralPath $deploymentFile -Encoding UTF8

Write-Host ""
Write-Host "Local deployment is running."
Write-Host "URL: $url"
Write-Host "Task: $taskName"
Write-Host "Log: $logFile"
