// Create By WebStorm
// Author: rlgyzhcn
// Date: 2020/4/13 20:21

const WeatherService = require('../service/weatherService');

class WeatherController {

    constructor() {
        this.service = new WeatherService();
    }

    /**
     * 更新天气信息
     *
     * @param requestParams
     * @return Object
     */
    actionIndex(requestParams) {
        return this.service.update();
    }
}


module.exports = {class: WeatherController};