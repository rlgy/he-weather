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
            let data = {
                description: {
                    description: "阴",
                    image: "https://cdn.heweather.com/cond_icon/404.png"
                },
                location_temperature: {
                    location: "余杭区",
                    temperature: 24,
                },
                now_and_forecast: [
                    {
                        date: "今天",
                        image: "https://cdn.heweather.com/cond_icon/404.png",
                        temperature: {
                            max: 23,
                            min: 9
                        }
                    },
                    {
                        date: "明天",
                        image: "https://cdn.heweather.com/cond_icon/404.png",
                        temperature: {
                            max: 23,
                            min: 9
                        }
                    },
                    {
                        date: "04/14",
                        image: "https://cdn.heweather.com/cond_icon/404.png",
                        temperature: {
                            max: 23,
                            min: 9
                        }
                    },
                    {
                        date: "04/15",
                        image: "https://cdn.heweather.com/cond_icon/404.png",
                        temperature: {
                            max: 23,
                            min: 9
                        }
                    }
                ]

            };
            event.reply('weather-updated', {code: 0, data: data});
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
