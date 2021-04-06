const { app, BrowserWindow } = require('electron')
const path = require('path')

// require('electron-reload')(__dirname, {
//     electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
// })

function createWindow() {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        backgroundColor: '#dedede',
        icon: './images/icons/board-of-directors.png',
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.webContents.openDevTools()
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})