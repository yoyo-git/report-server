// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入jquery
import 'jquery'
// 引入路由
import router from './router'
// 引入饿了么组件
import ElementUI from 'element-ui'
// 引入饿了么样式表
import 'element-ui/lib/theme-chalk/index.css'
// http 拦截
import './filiter/http.js'
// 所有变量
import CONSTANT from './services/constant.js'
// 数据接口
import API from './api/api.js'

Vue.use(ElementUI)

// 全局引用API接口
Vue.prototype.API = API
// 全局引用静态变量
Vue.prototype.CONSTANT = CONSTANT
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
