const {app: electron, BrowserWindow, Menu} = require('electron');

class app {
    constructor() {
        // 禁用菜单
        Menu.setApplicationMenu(null);
        // 初始化窗口参数
        this.winParams = this._initWinParams();
    }

    run() {
        electron.on('ready', () => {
            let win = new BrowserWindow(this.winParams);
            win.loadFile('./src/html/index.html');
            // win.webContents.openDevTools();
        });
    }
    //初始化窗口参数
    _initWinParams() {
        return {
            width: 450,
            height: 150,
            darkTheme: true,
            frame: false,
            resizable: false
        }
    }
}

module.exports = app;
