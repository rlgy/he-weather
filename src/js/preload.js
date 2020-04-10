const {ipcRenderer} = require('electron');

(function (window) {
    window.ipcRenderer = ipcRenderer;
})(window);