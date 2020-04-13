// Create By WebStorm
// Author: rlgyzhcn
// Date: 2020/4/13 下午4:41
// 和风天气api 基础对象

const {https} = require('https');
const querystring = require('querystring');
const {net} = require('electron');


class HeBase {
    _base_url = 'https://free-api.heweather.net/s6/weather/';
    _app_key = 'bea713f1b9ae4208992f4bd375d016f8';

    constructor() {
    }

    _send(url, params) {
        params = Object.assign({}, params, {key: this._app_key});
        console.log(params);

        url += '?' + querystring.stringify(params);
        console.log(url);
        // const client = https.request(url, (res) => {
        //
        //     console.log(`状态码: ${res.statusCode}`);
        //     console.log(`响应头: ${JSON.stringify(res.headers)}`);
        //
        //
        //     res.setEncoding('utf8');
        //     res.on('data', function (chunk) {
        //         console.log(chunk);
        //         process.stdout.write(chunk);
        //         data += chunk;
        //     });
        //     res.on('end', function () {
        //         console.log(data);
        //         return JSON.parse(data);
        //     });
        //     res.on('error', function (error) {
        //         console.log(error);
        //     });
        // });
        // console.log(client);
        // client.on('error', function (error) {
        //     console.log(error);
        // });
        //
        // client.end();

        const promise = new Promise(function (resolve, reject) {

            let data = '';

            const request = net.request(url);
            request.on('response', (response) => {
                response.on('data', (chunk) => {
                    data += chunk;
                });
                response.on('end', () => {
                    data = JSON.parse(data).HeWeather6[0];
                    resolve(data);
                });
                response.on('error', function (error) {
                    reject(error);
                })
            });
            request.end();

        });

        return promise;


    }

}

module.exports = HeBase;