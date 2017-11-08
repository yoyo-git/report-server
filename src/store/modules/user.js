import { loginByName, logout, getInfo } from '../../api/login';
import Cookies from 'js-cookie';

export default {
  state: {
    user: '',
    roles: [],
    auth_type: '',
    status: '',
    uid: undefined,
    token: Cookies.get('Admin-Token'),
    style: ''
  },
  mutations: {
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_AUTH_TYPE: (state, type) => {
      state.auth_type = type;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_UID: (state, uid) => {
      state.uid = uid;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_STYLE: (state, style) => {
      state.style = style;
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = '';
    }
  },
  actions: {
    // 用户名登录
    LoginByName({ commit }, userInfo) {
      const name = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        console.log(userInfo);
        loginByName(name, userInfo.password).then(response => {
        	
          Cookies.set('Admin-Token', response.data.totalCount);
          console.log(response,Cookies)
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data;
          commit('SET_ROLES', data.role);
          resolve();
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          Cookies.remove('Admin-Token');
          resolve();
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
