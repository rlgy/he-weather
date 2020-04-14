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
    update(requestParams = {}) {
        // 读配置
        const params = {};
        const name = 'he';
        const instance = Factory.getInstance(name);
        const respect = require('../model/data/weather');

        const promise = instance.weather(params);

        return promise.then(function (data) {
            // data数据校验处理
            data = Object.assign({}, respect, data);

            return {code: 0, msg: '', data: data};
        });
    }
}

module.exports = WeatherService;