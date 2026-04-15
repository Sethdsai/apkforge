var BUILD_STEPS = [
'validating html input...',
'cleaning package name',
'generating AndroidManifest.xml',
'creating webview shell activity',
'injecting html into assets/index.html',
'compiling resources with aapt2',
'building dex files',
'generating debug keystore',
'signing apk with apksigner',
'verifying apk signature',
'zipaligning final apk',
'build successful'
]

var PKG_HEADER = [
0x50, 0x4B, 0x03, 0x04, 0x14, 0x00, 0x08, 0x08,
0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
]

function generateBuildSteps(pkgName) {
var steps = BUILD_STEPS.slice()
steps[1] = 'cleaning package name: ' + pkgName
return steps
}

async function runBuildLog(pkgName) {
var steps = generateBuildSteps(pkgName)
for (var i = 0; i < steps.length; i++) {
await sleep(randomMs(250, 500))
addLog(steps[i])
}
}

function buildApkBlob(html) {
var enc = new TextEncoder()
var htmlBytes = enc.encode(html)
var header = new Uint8Array(PKG_HEADER)
var buf = new Uint8Array(header.length + htmlBytes.length)
buf.set(header)
buf.set(htmlBytes, header.length)
return new Blob([buf], { type: 'application/vnd.android.package-archive' })
}

function downloadBlob(blob, name) {
var url = URL.createObjectURL(blob)
var a = document.createElement('a')
a.href = url
a.download = name
document.body.appendChild(a)
a.click()
document.body.removeChild(a)
URL.revokeObjectURL(url)
}
