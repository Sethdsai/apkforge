function $(id) {
return document.getElementById(id)
}

function sanitize(name) {
return name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()
}

function validatePkg(pkg) {
return /^([a-z][a-z0-9_]+\.){2,}[a-z][a-z0-9_]*/.test(pkg)
}

function validateVersion(ver) {
return /^\d+\.\d+\.\d+$/.test(ver)
}

function sleep(ms) {
return new Promise(function(r) { setTimeout(r, ms) })
}

function randomMs(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min
}
