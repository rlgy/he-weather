// Create By WebStorm
// Author: rlgyzhcn
// Date: 2020/4/13 下午4:31

const HeNormal = require('./normal');

/**
 * 和风天气数据适配器
 */
class He {
    weather(params = {}) {
        const normal = new HeNormal();
        const dataNow = normal.now(params);
        const dataForecast = normal.forecast(params);

        return dataNow.then(data => {
            const respect = require('../../model/data/weather');
            if ("ok" === data.status) {
                respect.description.description = data.now.cond_txt;
                respect.description.image = "https://cdn.heweather.com/cond_icon/" + data.now.cond_code + ".png";
                respect.location_temperature = {location: data.basic.location + '市', temperature: data.now.tmp}
            }
            return respect;
        }).then(respect => {
            return dataForecast.then(data => {
                if ("ok" === data.status) {
                    for (let i = 0; i < 4; i++) {
                        let date = data.daily_forecast[i].date;
                        if (0 === i) {
                            date = '今天';
                        } else if (1 === i) {
                            date = '明天';
                        } else {
                            let dateObj = new Date(date);
                            date = dateObj.getMonth() + 1 + '/' + dateObj.getDate();
                        }
                        respect.now_and_forecast[i] = {
                            date: date,
                            "image": "https://cdn.heweather.com/cond_icon/" + data.daily_forecast[i].cond_code_d + ".png",
                            temperature: {
                                max: data.daily_forecast[i].tmp_max,
                                min: data.daily_forecast[i].tmp_min,
                            }
                        }
                    }
                }
                return respect;
            });
        });
    }
}

module.exports = (new He());