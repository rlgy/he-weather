// mini 程序的组件
import Vue from 'vue/dist/vue.common';
import './base';

Vue.component('weather-now-detail', {
    props: {
        detail: Object,
    },
    template:
        "<div id='weather-now-detail' class='col-xs-4'>" +
        "<p>{{ city }}</p>" +
        "<p><span>{{ weather }}</span><span>{{ temperature }}</span></p>" +
        "<p><span>{{ up }}</span><span>{{ down }}</span><span>{{ update }}</span></p>" +
        "</div>",
    data: function () {
        return {
            city: this.detail.city,
            weather: this.detail.weather,
            temperature: this.detail.temperature,
            up: this.detail.up,
            down: this.detail.down,
            update: this.detail.update,
        }
    }
});

Vue.component('weather-now-extra', {
    props: {
        extra: Object,
    },
    template:
        "<div id='weather-now-extra' class='col-xs-4'>" +
        "<p>云量: {{ cloudiness }}</p>" +
        "<p>湿度: {{ humidity }}</p>" +
        "<p>气压: {{ air }}</p>" +
        "<p>风: {{ wind }}</p>" +
        "</div>",
    data: function () {
        return {
            cloudiness: this.extra.cloudiness,
            humidity: this.extra.humidity,
            air: this.extra.air,
            wind: this.extra.wind,
        }
    }
});

Vue.component('weather-now', {
    props: {
        data: Object,
    },
    template: "<div id='weather-now' class='row'>" +
        "<weather-image v-bind:image='data.image'></weather-image>" +
        "<weather-now-detail v-bind:detail='data.detail'></weather-now-detail>" +
        "<weather-now-extra v-bind:extra='data.extra'></weather-now-extra>" +
        "</div>"
});
