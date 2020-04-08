const {app: electron, BrowserWindow, Menu, ipcMain} = require('electron');
const path = require('path');

class app {
    constructor() {
        // 禁用菜单
        Menu.setApplicationMenu(null);
        // 初始化窗口参数
        this.winParams = this._initWinParams();
    }

    run() {
        ipcMain.on('asynchronous-message', (event, args) => {
            console.log(args);
            event.reply('asynchronous-reply', 'JLM')
        });

        electron.on('ready', () => {
            let win = new BrowserWindow(this.winParams);
            win.loadFile('./src/html/index.html');
            win.webContents.openDevTools();
        });

    }

    //初始化窗口参数
    _initWinParams() {
        return {
            width: 450,
            height: 150,
            darkTheme: true,
            // frame: false,
            resizable: false,
            webPreferences: {
                preload: path.join(electron.getAppPath(), 'src/js/preload.js'),
            }
        }
    }
}

module.exports = app;
