// mini 程序

var get = {
    basic: {
        "cid": "CN101210101",
        "location": "杭州",
        "parent_city": "杭州",
        "admin_area": "浙江",
        "cnty": "中国",
        "lat": "30.28745842",
        "lon": "120.15357971",
        "tz": "+8.00"
    },
    update: {
        "loc": "2020-04-10 15:36",
        "utc": "2020-04-10 07:36"
    },
    status: "ok",
    now: {
        "cloud": "91",
        "cond_code": "101",
        "cond_txt": "大暴雨到特大暴雨",
        "fl": "20",
        "hum": "36",
        "pcpn": "0.0",
        "pres": "1012",
        "tmp": "23",
        "vis": "8",
        "wind_deg": "93",
        "wind_dir": "东风",
        "wind_sc": "3",
        "wind_spd": "16"
    }
};

var data = {
    image: {
        alt: get.now.cond_txt,
        src: "../dist/cloud.png"
    },
    detail: {
        city: get.basic.location + '市，' + get.basic.admin_area + '省，' + get.basic.cnty,
        weather: get.now.cond_txt,
        temperature: get.now.tmp,
        up: "06:00",
        down: "18:00",
        update: "21:29",
    },
    extra: {
        cloudiness: get.now.cloud,
        humidity: get.now.hum,
        air: get.now.pres,
        wind: get.now.wind_dir + ' ' + get.now.wind_sc + '级',
    }
};

var weather = new Vue({
    el: "#weather",
    data: {
        data: data
    },
});

// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//     console.log(arg);
//     setTimeout(() => {
//         data.message = arg;
//     }, 2000);
// });
// ipcRenderer.send('asynchronous-message', 'ping');