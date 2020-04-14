// Create By WebStorm
// Author: rlgyzhcn
// Date: 2020/4/12 20:34

const HeBase = require('./base');

/**
 * 常规天气数据接口
 */
class HeNormal extends HeBase {
    _operate = {now: 'now', forecast: 'forecast'};
    _params = {
        location: "杭州",
        lang: "zh",
        unit: "m",
    };

    now(params = {}) {
        return this._send(this._base_url + this._operate.now, this._params);
    }

    forecast(params = {}) {
        return this._send(this._base_url + this._operate.forecast, this._params);
    }
}


module.exports = HeNormal;