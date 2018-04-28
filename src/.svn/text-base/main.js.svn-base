// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'//vue路由
import store from './store' //vuex管理

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/resetElement.css';

import './util/jquery-1.11.3.min.js'
import {noScroll} from './util/iphoneJR.js'


// import { getToken, removeToken } from './util/utilToken'

Vue.use(ElementUI)

// if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
//   /* 添加IOS标识 */
//   document.documentElement.classList.add('ios');
//   /* IOS8以上给html添加hairline样式，以便特殊处理 */
//   if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
//   document.documentElement.classList.add('hairline');
// }

noScroll()
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

