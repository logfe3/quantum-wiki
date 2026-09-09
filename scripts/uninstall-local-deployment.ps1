[CmdletBinding()]
param()

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$taskName = "QuantumThesisWiki"
$task = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue

if (-not $task) {
  Write-Host "Local deployment task is not installed."
  exit 0
}

if ($task.State -eq "Running") {
  Stop-ScheduledTask -TaskName $taskName
  Start-Sleep -Milliseconds 500
}

Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
Write-Host "Removed local deployment task: $taskName"
