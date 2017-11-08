// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// css库
import './resource/css/index.scss'
import store from './store';
// 引入jquery
import 'jquery';
// js库
import './libs/index.js';
import Element from 'element-ui';
// 引入路由
import router from './router';
// http 拦截
import './filiter/http.js';
// 所有变量
import CONSTANT from './services/constant.js';
// 数据接口
import API from './api/api.js';
// js库
import layer from './libs/layer/layer-2.4.js';
import Cookies from 'js-cookie';
/* eslint-disable no-new */
Vue.use(Element)
// 全局引用API接口
Vue.prototype.API = API
// 全局引用静态变量
Vue.prototype.CONSTANT = CONSTANT
//
//router.beforeEach((to, from, next) => {
//	if (to.path === '/') {
//		  next({ path: '/login' });
//	}else{
//		if(to.path === '/login'){
//			next()
//		}else{
//		  if (Cookies.get('Admin-Token')) { // 判断是否有token
//		  	next()
//		 	} else {
//		      next('/login'); // 否则全部重定向到登录页
//		  }
//	 	}
// 	}
//});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
