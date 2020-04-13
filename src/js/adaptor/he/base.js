// Create By WebStorm
// Author: rlgyzhcn
// Date: 2020/4/13 下午4:41
// 和风天气api 基础对象

const {request} = require('http');
const querystring = require('querystring');

const HeBase = () => {
    this.base_url = 'https://free-api.heweather.net/s6/weather/';
    this.app_key = 'bea713f1b9ae4208992f4bd375d016f8';
    _send = (url, params) => {
        params = Object.assign({}, params, {key: this.app_key});
        url += '?' + querystring.stringify(params);
        let client = request.request(url, {timeout: 10}, (res) => {

        });

        client.end();
    }
};

module.exports = HeBase;