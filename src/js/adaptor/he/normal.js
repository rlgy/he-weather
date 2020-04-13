// Create By WebStorm
// Author: rlgyzhcn
// Date: 2020/4/12 20:34


// 常规天气数据接口

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
    },
    daily_forecast: [
        {
            "cond_code_d": "104",
            "cond_code_n": "305",
            "cond_txt_d": "阴",
            "cond_txt_n": "小雨",
            "date": "2019-06-05",
            "hum": "57",
            "pcpn": "0.0",
            "pop": "0",
            "pres": "1003",
            "sr": "04:46",
            "ss": "19:40",
            "tmp_max": "28",
            "tmp_min": "19",
            "uv_index": "2",
            "vis": "24",
            "wind_deg": "204",
            "wind_dir": "西南风",
            "wind_sc": "1-2",
            "wind_spd": "8"
        },
        {
            "cond_code_d": "305",
            "cond_code_n": "101",
            "cond_txt_d": "小雨",
            "cond_txt_n": "多云",
            "date": "2019-06-06",
            "hum": "65",
            "pcpn": "0.0",
            "pop": "0",
            "pres": "1001",
            "sr": "04:46",
            "ss": "19:40",
            "tmp_max": "25",
            "tmp_min": "18",
            "uv_index": "4",
            "vis": "22",
            "wind_deg": "112",
            "wind_dir": "东南风",
            "wind_sc": "1-2",
            "wind_spd": "10"
        },
        {
            "cond_code_d": "101",
            "cond_code_n": "100",
            "cond_txt_d": "多云",
            "cond_txt_n": "晴",
            "date": "2019-06-07",
            "hum": "22",
            "pcpn": "0.0",
            "pop": "25",
            "pres": "999",
            "sr": "04:45",
            "ss": "19:41",
            "tmp_max": "32",
            "tmp_min": "21",
            "uv_index": "7",
            "vis": "25",
            "wind_deg": "355",
            "wind_dir": "北风",
            "wind_sc": "3-4",
            "wind_spd": "21"
        },
        {
            "cond_code_d": "100",
            "cond_code_n": "100",
            "cond_txt_d": "晴",
            "cond_txt_n": "晴",
            "date": "2019-06-08",
            "hum": "35",
            "pcpn": "0.0",
            "pop": "1",
            "pres": "999",
            "sr": "04:45",
            "ss": "19:41",
            "tmp_max": "34",
            "tmp_min": "20",
            "uv_index": "5",
            "vis": "25",
            "wind_deg": "354",
            "wind_dir": "北风",
            "wind_sc": "1-2",
            "wind_spd": "4"
        }
    ]
};

const data = require('../../model/data/weather');
const HeBase = require('./base');


const OPERATE_NOW = 'now';
const OPERATE_FORECAST = 'forecast';
const PARAMS = {
    location: "杭州",
    lang: "zh",
    unit: "i",
};


var HeNormal = {};
HeNormal.prototype = new HeBase();


module.exports = HeNormal;