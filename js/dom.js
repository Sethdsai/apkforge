var els = {}

function initDom() {
els.htmlInput = $('htmlInput')
els.charCount = $('charCount')
els.buildBtn = $('buildBtn')
els.clearBtn = $('clearBtn')
els.output = $('output')
els.logArea = $('logArea')
els.statusText = $('statusText')
els.appName = $('appName')
els.pkgName = $('pkgName')
els.appVer = $('appVer')
}

function updateCharCount() {
var len = els.htmlInput.value.length
els.charCount.textContent = len + ' chars'
}

function addLog(msg) {
var div = document.createElement('div')
div.textContent = msg
els.logArea.appendChild(div)
els.logArea.scrollTop = els.logArea.scrollHeight
}

function showOutput() {
els.output.style.display = 'block'
els.logArea.innerHTML = ''
}

function hideOutput() {
els.output.style.display = 'none'
els.logArea.innerHTML = ''
}

function setBuilding() {
els.buildBtn.disabled = true
els.buildBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> building...'
els.statusText.textContent = 'building...'
}

function setIdle() {
els.buildBtn.disabled = false
els.buildBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> build apk'
els.statusText.textContent = 'build complete'
}

function flashBorder(el, color) {
el.style.border = '2px solid ' + color
setTimeout(function() {
el.style.border = 'none'
}, 2000)
}

function clearEditor() {
els.htmlInput.value = ''
updateCharCount()
hideOutput()
}
