(function() {
initDom()

els.htmlInput.addEventListener('input', updateCharCount)

els.buildBtn.addEventListener('click', function() {
var html = els.htmlInput.value.trim()
var appName = els.appName.value.trim() || 'My App'
var pkgName = els.pkgName.value.trim() || 'com.example.myapp'
var version = els.appVer.value.trim() || '1.0.0'

if (!html) {
flashBorder(els.htmlInput, '#f38ba8')
return
}

setBuilding()
showOutput()

runBuildLog(pkgName).then(function() {
setIdle()
var blob = buildApkBlob(html)
var safeName = sanitize(appName)
downloadBlob(blob, safeName + '.apk')
})
})

els.clearBtn.addEventListener('click', clearEditor)
})()
