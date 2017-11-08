import API from './api'

export function loginByName(name, password) {
  const data = {
    name,
    password
  };
  var http = axios({
        method: post,
        url: '/api/user/getUserJobList',
        data: data
     }).then(function (res) {
        if ([0, 1].indexOf(res.data.code) !== -1) {
          return res.data.info
        }
      }).catch(function (error) {
        return error
      })
  return http;
}

export function logout() {
  return API.getUserJobList({});
}

export function getInfo(token) {
  return API.getUserJobList({});
}
