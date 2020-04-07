const {app, BrowserWindow, Menu} = require('electron');

function createWindow() {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        width: 450,
        height: 150,
        darkTheme: true,
        // frame: false,
        resizable: false,
    });

    // 并且为你的应用加载index.html
    win.loadFile('index.html').then(() => {
    });

    // 打开开发者工具
    // win.webContents.openDevTools();

    Menu.setApplicationMenu(null);

}

app.whenReady().then(createWindow);
