import Vue from 'vue'
import Router from 'vue-router'
// 业务层
import index from '@/components/index.js'
// 开关
import CONSTANT from '../services/constant.js'

Vue.use(Router)

const router = []

function routerfn () {
  // 所有后台的路由
  var admin = []
  // 所有前台的路由
  var custom = []
  // 所有通用的路由
  var common = []
  // 判断是否做了前后台分离  如果IS_ADMIN 是否后台 true
  if (!CONSTANT.IS_SEPARATE || CONSTANT.IS_ADMIN) {
    admin = [{
      path: '/hello',
      name: 'Hello',
      component: index['admin']['HelloWorld'],
      children: [
        {
           path: 'hello',
  				 component: index['admin']['hello']
        }
      ]
    }]
    for (var i in admin) {
      router.push(admin[i])
    }
  }
  // 判断是否做了前后台分离  如果IS_ADMIN 是否后台 true
  if (!CONSTANT.IS_SEPARATE || !CONSTANT.IS_ADMIN) {
    custom = [{
    path: '/loginTest',
    name: 'Login',
    component: index['custom']['Login']
  }]
    for (var _i in custom) {
      router.push(custom[_i])
    }
  }
  common = [{
    path: '/login',
    name: 'login',
    component: index['common']['login']
  },{
    path: '/not-found',
    name: 'not-found',
    component: index['common']['not-found']
  }]
  for (var j in common) {
    router.push(common[j])
  }
}
routerfn()

export default new Router({
  mode: 'history',
  routes: router
})
