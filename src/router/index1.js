import Vue from 'vue'
import Router from 'vue-router'
// 业务层
import index from '@/components/login.js'
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
    admin = []
    for (var i in admin) {
      router.push(admin[i])
    }
  }
  // 判断是否做了前后台分离  如果IS_ADMIN 是否后台 true
  if (!CONSTANT.IS_SEPARATE || !CONSTANT.IS_ADMIN) {
    custom = []
    for (var _i in custom) {
      router.push(custom[_i])
    }
  }
  common = [{
    path: '/',
    redirect: '/login',
  }, {
    path: '/login',
    name: 'login',
    component: index['common']['login']
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: index['common']['dashboard']
  }]
  for (var j in common) {
    router.push(common[j])
  }
}
routerfn()

export default new Router({
  routes: router,
  mode: 'history'
})
