const electron = require('electron');

const app = {
    _electron: null,
    run() {
        this._electron = electron.app;
        this._electron.on('ready', () => {
            const win = new electron.BrowserWindow({
                width: 450,
                height: 150,
                darkTheme: true,
                frame: false,
                resizable: false,
            });
            win.loadFile('./src/html/index.html').then(r => {
            });
            electron.Menu.setApplicationMenu(null);
        });
    },
};

module.exports = app;
