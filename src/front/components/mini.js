// mini 程序的组件

Vue.component('weather-mini', {
    props: {
        data: Object,
    },
    template: "<div class='container weather-mini'>" +
        "<weather-description></weather-description>" +
        "<location-temperature></location-temperature>" +
        "<now-and-forecast></now-and-forecast>" +
        "</div>"
});

// 当天以及预报组件
Vue.component('now-and-forecast', {
    template: "<div class='container now-and-forecast'>" +
        "<div class='row'>" +
        "<div class='col-3'><weather-daily></weather-daily></div>" +
        "<div class='col-3'><weather-daily></weather-daily></div>" +
        "<div class='col-3'><weather-daily></weather-daily></div>" +
        "<div class='col-3'><weather-daily></weather-daily></div>" +
        "</div>" +
        "</div>"
});

// 简略天气描述组件
Vue.component('weather-daily', {
    // props: {
    //     daily_info: Object,
    // },
    template: "<div class='weather-daily'>" +
        "<div>今天</div>" +
        "<div><img src='https://cdn.heweather.com/cond_icon/404.png'></div>" +
        "<div>20&#8451;/9&#8451;</div>" +
        "</div>",
});

// 时间日期地区温度组件
Vue.component('location-temperature', {
    // props: {
    //     location: String,
    //     temperature: String,
    // },
    template: "<div class='container location-temperature'>" +
        "<div class='row'>" +
        "<div class='col-6'>" +
        "<div>04月12日 周日</div>" +
        "<div>杭州市</div>" +
        "</div>" +
        "<div class='col-6 temperature'>20 &#8451;</div>" +
        "</div>" +
        "</div>"
});

// 天气描述组件
Vue.component('weather-description', {
    template: "<div class='container weather-description'>" +
        "<div><img src='https://cdn.heweather.com/cond_icon/404.png'></div>" +
        "<div>阴</div>" +
        "</div>",
});