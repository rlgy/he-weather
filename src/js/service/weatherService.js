// Create By WebStorm
// Author: rlgyzhcn
// Date: 2020/4/13 21:53

const Factory = require('../adaptor/Factory');

/**
 * 天气服务
 */
class WeatherService {
    /**
     * 更新天气信息
     */
    update() {
        // 读配置
        const params = {};
        const name = 'he';
        const instance = Factory.getInstance(name);
        const respect = require('../model/data/weather');

        const promise = instance.weather(params);

        promise.then(function (data) {
            // data数据校验处理
            data = Object.assign({}, respect, data);
            console.log(data);
            return {code: 0, data: data};
        });
        return promise;
    }
}

module.exports = WeatherService;