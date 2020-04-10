// 基础组件全局注册
import Vue from 'vue/dist/vue.common';

// 天气图片组件
Vue.component('weather-image', {
    props: {
        image: Object,
    },
    template: "<div class='col-xs-4' id='weather-image'>" +
        "<img v-bind:alt='image.alt' v-bind:src='image.src'>" +
        "</div>",
});