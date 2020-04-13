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
        ipcMain.on('weather-update', (event, args) => {
            let controllerId = args.controller.toLowerCase() + 'Controller';
            let action = 'action' + args.action[0].toUpperCase() + args.action.slice(1).toLowerCase();
            let requestParams = args.requestParams;
            const controllerClass = require('./controller/' + controllerId).class;
            let controller = new controllerClass();
            controller[action](requestParams).then(function (data) {
                event.reply('weather-updated', {code: 0, data: data});
            }, function (error) {
                // todo log
                // console.log(error);
            });
        });

        electron.on('ready', () => {
            let win = new BrowserWindow(this.winParams);
            win.loadFile('./src/dist/mini.html');
            win.webContents.openDevTools();
        });

    }

    //初始化窗口参数
    _initWinParams() {
        return {
            x: 30,
            y: 30,
            width: 450,
            height: 370,
            frame: false,
            resizable: false,
            transparent: true,
            webPreferences: {
                preload: path.join(electron.getAppPath(), 'src/js/preload.js'),
            },
        }
    }
}

module.exports = app;
