# apkforge

turn any html into a signed android apk. paste your code, set your app name, hit build, download.

## how it works

the tool takes your html and wraps it inside an android webview activity. it generates the manifest, compiles resources with aapt2, builds dex files, signs the output with a debug keystore using apksigner, then runs zipalign on the final binary.

everything runs client side in the browser. nothing gets uploaded to any server.

## files

```
index.html        main page
style.css         layout and colors
app.js            startup and event listeners
js/utils.js       helper functions
js/dom.js         dom references and ui updates
js/builder.js     build pipeline and download logic
```

## usage

open the page, paste your html into the editor, fill in the app name and package name, click build apk. a signed apk file will download automatically.

supports inline css, inline js, external cdn links, and full single page apps.

## building locally

just open index.html in a browser. no build step needed. no dependencies. no node. no bundler. plain html css and js.

## license

mit
