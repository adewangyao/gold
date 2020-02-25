import axios from 'axios'
import router from '../router'

const request = axios.create({
  baseURL: 'https://123.122.234.85:5001/api/v1/'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  if (config.url !== '/login') {   //设置请求头  签名
    // config.headers.Authorization = window.localStorage.getItem('token')
    config.headers.Authorization = 'MkFCMzhDMjMzNDk4NEU5RjhBMTIxODBGNUQ0QTc1RA=='
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
// request.interceptors.response.use(function (response) {
//   if (response.data.meta.status === 401) {
//     router.replace('/login')
//   }
//   return response
// }, function (error) {
//   return Promise.reject(error)
// })

export default request