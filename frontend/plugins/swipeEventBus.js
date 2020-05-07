// https://binbytes.com/blog/create-global-event-bus-in-nuxtjs

import Vue from 'vue';

const eventBus = {};

eventBus.install = function (Vue) {
  Vue.prototype.$swipeEventBus = new Vue();
};

Vue.use(eventBus);
