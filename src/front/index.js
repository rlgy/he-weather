// mini 程序
(function () {
    let data = {
        description: {
            description: "",
            image: ""
        },
        location_temperature: {
            location: "",
            temperature: 0,
        },
        now_and_forecast: [
            {
                date: "",
                image: "",
                temperature: {
                    max: 0,
                    min: 0
                }
            },
            {
                date: "",
                image: "",
                temperature: {
                    max: 0,
                    min: 0
                }
            },
            {
                date: "",
                image: "",
                temperature: {
                    max: 0,
                    min: 0
                }
            },
            {
                date: "",
                image: "",
                temperature: {
                    max: 0,
                    min: 0
                }
            }

        ]
    };
    let weather = new Vue({
        el: "#weather",
        data: {
            data: data
        }
    });
    ipcRenderer.on('weather-updated', (event, arg) => {
        if (arg.code === 0) {
            weather.data = Object.assign({}, weather.data, arg.data);
        }
    });
    ipcRenderer.send('weather-update');
    window.weather = weather;
})(window, ipcRenderer);