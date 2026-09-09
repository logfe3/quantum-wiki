[CmdletBinding()]
param(
  [ValidateRange(1, 65535)]
  [int]$Port = 8088
)

$taskName = "QuantumThesisWiki"
$task = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
$taskInfo = if ($task) {
  Get-ScheduledTaskInfo -TaskName $taskName -ErrorAction SilentlyContinue
} else {
  $null
}
$listeners = @(Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue)

$httpStatus = $null
$pageTitle = $null
try {
  $response = Invoke-WebRequest -UseBasicParsing -Uri "http://127.0.0.1:$Port/" -TimeoutSec 5
  $httpStatus = $response.StatusCode
  if ($response.Content -match "<title>(.*?)</title>") {
    $pageTitle = $Matches[1]
  }
} catch {
  $httpStatus = "unreachable"
}

[pscustomobject]@{
  TaskName = $taskName
  TaskState = if ($task) { $task.State } else { "NotInstalled" }
  LastTaskResult = if ($taskInfo) { $taskInfo.LastTaskResult } else { $null }
  Listening = $listeners.Count -gt 0
  ProcessId = ($listeners | Select-Object -ExpandProperty OwningProcess -First 1)
  Url = "http://127.0.0.1:$Port/"
  HttpStatus = $httpStatus
  PageTitle = $pageTitle
} | Format-List
