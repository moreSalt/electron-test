
// import { app, BrowserWindow } from "electron"
const { app, BrowserWindow } = require("electron")
const { join } = require("path")
// import { join } from "path"

app.whenReady().then(() => {
    main()
})
function main () {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile(join(__dirname, "../public/index.html"))
}