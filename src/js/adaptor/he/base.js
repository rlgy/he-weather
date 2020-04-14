// Create By WebStorm
// Author: rlgyzhcn
// Date: 2020/4/13 下午4:41
// 和风天气api 基础对象

const https = require('https');
const querystring = require('querystring');
const {net} = require('electron');


class HeBase {
    _base_url = 'https://free-api.heweather.net/s6/weather/';
    _app_key = 'bea713f1b9ae4208992f4bd375d016f8';

    constructor() {
    }

    _send(url, params) {
        params = Object.assign({}, params, {key: this._app_key});
        url += '?' + querystring.stringify(params);
        const promise = new Promise(function (resolve, reject) {

            let data = '';
            const client = https.request(url, {timeout: 500}, (res) => {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on('end', function () {
                    data = JSON.parse(data).HeWeather6[0];
                    resolve(data);
                });
                res.on('error', function (error) {
                    reject(error);
                });
            });

            client.on('error', function (error) {
                reject(error);
            });

            client.end();

        });
        return promise;
    }

}

module.exports = HeBase;