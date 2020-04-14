// Create By WebStorm
// Author: rlgyzhcn
// Date: 2020/4/13 下午1:55

// 天气数据模型

const weather = {
    description: {
        description: "",
        image: ""
    },
    location_temperature: {
        location: "",
        temperature: 0,
    },
    now_and_forecast: [
        {
            date: "",
            image: "",
            temperature: {
                max: 0,
                min: 0
            }
        },
        {
            date: "",
            image: "",
            temperature: {
                max: 0,
                min: 0
            }
        },
        {
            date: "",
            image: "",
            temperature: {
                max: 0,
                min: 0
            }
        },
        {
            date: "",
            image: "",
            temperature: {
                max: 0,
                min: 0
            }
        }

    ]
};

module.exports = weather;