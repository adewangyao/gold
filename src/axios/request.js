import axios from 'axios'
import router from '../router'
import Vue from 'vue'
const request = axios.create({
  baseURL: 'http://10.135.192.6:808/api/v1'
})

// 请求拦截器
request.interceptors.request.use( (config)=> {
  if (config.url !== '/login') {   //设置请求头  签名
    Vue.prototype.startLoading()
    // config.headers.Authorization = window.localStorage.getItem('token')
    config.headers.Authorization = 'Bearer MkFCMzhDMjMzNDk4NEU5RjhBMTIxODBGNUQ0QTc1RA=='
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use( (response)=> {
  Vue.prototype.stopLoading()
  // if (response.data.meta.status === 401) {
    //   router.replace('/login')
    // }
    return response
  }, function (error) {
    Vue.prototype.stopLoading()
  return Promise.reject(error)
})

export default request
