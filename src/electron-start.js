const { app, BrowserWindow, ipcMain } = require('electron');

const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800, 
        height: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadURL('http://localhost:3000');

    win.on('closed', function () {
        win = null
    });
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});

ipcMain.on('close-window', (event) => {
    if (win) {
        win.close();
    }
});

ipcMain.on('minimize-window', (event) => {
    if (win) {
        win.minimize();
    }
});

ipcMain.on('resize-window', (event) => {
    if (win) {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }    
    }
});
