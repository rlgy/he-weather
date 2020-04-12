// mini 程序的组件

Vue.component('weather-mini', {
    props: {
        data: Object,
    },
    template: "<div class='container weather-mini'>" +
        "<weather-description v-bind:data='data.description'></weather-description>" +
        "<location-temperature v-bind:data='data.location_temperature'></location-temperature>" +
        "<now-and-forecast v-bind:data='data.now_and_forecast'></now-and-forecast>" +
        "</div>"
});

// 当天以及预报组件
Vue.component('now-and-forecast', {
    props: {
        data: Array
    },
    template: "<div class='container now-and-forecast'>" +
        "<div class='row'>" +
        "<div class='col-3' v-for='item in data'><weather-daily v-bind:data='item'></weather-daily></div>" +
        "</div>" +
        "</div>"
});

// 简略天气描述组件
Vue.component('weather-daily', {
    props: {
        data: Object,
    },
    template: "<div class='weather-daily'>" +
        "<div>{{ date }}</div>" +
        "<div><img v-bind:src='image'></div>" +
        "<div>{{ temperature.max }}&#8451;/{{ temperature.min }}&#8451;</div>" +
        "</div>",
    computed: {
        date: function () {
            return this.data.date;
        },
        image: function () {
            return this.data.image;
        },
        temperature: function () {
            return this.data.temperature;
        }
    }
});

// 时间日期地区温度组件
Vue.component('location-temperature', {
    props: {
        data: Object,
    },
    template: "<div class='container location-temperature'>" +
        "<div class='row'>" +
        "<div class='col-6'>" +
        "<div>{{ date_text }}</div>" +
        "<div>{{ location }}</div>" +
        "</div>" +
        "<div class='col-6 temperature'>{{ temperature }} &#8451;</div>" +
        "</div>" +
        "</div>",
    computed: {
        location: function () {
            return this.data.location;
        },
        temperature: function () {
            return this.data.temperature;
        },
        date_text: () => {

            let date = new Date();
            let weeks = [
                '日', '一', '二', '三', '四', '五', '六'
            ];

            return date.getMonth() + '月' + date.getDate() + '日 ' + '星期' + weeks[date.getDay()];
        }
    }
});

// 天气描述组件
Vue.component('weather-description', {
    props: {
        data: Object,
    },
    template: "<div class='container weather-description'>" +
        "<div><img v-bind:src='image'></div>" +
        "<div>{{ description }}</div>" +
        "</div>",
    computed: {
        description: function () {
            return this.data.description;
        },
        image: function () {
            return this.data.image;
        }
    },
});