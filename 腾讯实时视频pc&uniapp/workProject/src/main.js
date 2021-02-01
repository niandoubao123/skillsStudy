// 加载公共js
require('./static/config.js');
require('./common/index.js');
require('./interceptor/index.js');
import Vue from 'vue';
import App from './App';
import uView from 'uview-ui';
import store from './store/index.js';
//把vuex定义成全局组件
Vue.prototype.$store = store;

Vue.use(uView);
App.mpType = 'app';

import MescrollBody from 'mescroll-uni/mescroll-body.vue';
import MescrollUni from 'mescroll-uni/mescroll-uni.vue';
Vue.component('mescroll-body', MescrollBody);
Vue.component('mescroll-uni', MescrollUni);

const app = new Vue({
  ...App,
  //挂载
  store
});
app.$mount();
//注册组件。注册后在每个vue的page页面里可以直接使用组件。