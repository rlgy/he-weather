var data = {message: "Hello"};
var app = new rlweather.Vue({
    el: "#root",
    data: data
});


// console.log(ipcRenderer.sendSync('synchronous-message', 'ping'));

rlweather.ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg);
    setTimeout(() => {
        data.message = arg;
    }, 2000);
});
rlweather.ipcRenderer.send('asynchronous-message', 'ping');