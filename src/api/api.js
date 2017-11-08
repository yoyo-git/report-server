import API_CONFIG from './api.conf.js'
import axios from 'axios'
const API = {}
for (var api in API_CONFIG) {
  API[api] = function (data) {
    var http = axios({
      method: API_CONFIG[api].method,
      url: '/api/' + API_CONFIG[api].url,
      data: data
    }).then(function (res) {
      if ([0, 1].indexOf(res.data.code) !== -1) {
        return res.data.info
      }
    }).catch(function (error) {
      return error
    })
    return http
  }
}
  var http1 = axios({
        method: "POST",
        url: '/api/user/getUserJobList',
        data: {}
      }).then(function (res) {
        if ([0, 1].indexOf(res.data.code) !== -1) {
          return res.data.info
        }
      }).catch(function (error) {
        return error
      })
  console.log(http1);
  console.log(API.getUserJobList)
export default API
