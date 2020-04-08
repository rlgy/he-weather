const Vue = require('vue/dist/vue.common');
const {ipcRenderer} = require('electron');


// 暴露vue接口
(function (window) {
    window.rlweather = {
        Vue: Vue,
        ipcRenderer: ipcRenderer,
    };
})(window);