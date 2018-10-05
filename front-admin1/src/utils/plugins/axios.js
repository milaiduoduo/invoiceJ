import axios from 'axios';
import {
  Message,
  MessageBox
} from 'element-ui';

const axios_ins = axios.create({
  // baseURL: process.env.BASE_API,
  baseURL: process.env.NODE_ENV === "development" ? '/api' : "",
  timeout: 5000
})

//request拦截器
// axios_ins.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       //让每个请求都携带自定义token
//       config.headers['X-Token'] = getToken();
//     }
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log('request error:', error);
//     Promise.reject(error);
//   }
// )

//response 拦截器
// axios_ins.interceptors.response.use(
//   response => {
//     // code为非1001是抛错，
//     const res = response.data;
//     if (res.code !== 1001) {
//       Message({
//         message: res.message,
//         type: 'error',
//         duration: 5000
//       });
//       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         MessageBox.confirm(
//           '你已被登出，可以取消继续留在该页面，或者重新登录',
//           '确定登出', {
//             confirmButtonText: '重新登录',
//             cancelButtonText: '取消',
//             type: 'warning'
//           }
//         ).then(() => {
//           store.dispatch('FedLogOut').then(() => {
//             location.reload() // 为了重新实例化vue-router对象 避免bug
//           })
//         })
//       }
//       return Promise.reject('error')
//     } else {
//       return response.data
//     }
//   },
//   error => {
//     console.log('response err:', error);
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5000
//     })
//     return Promise.reject(error)
//   }
// )


const get = (url, params, config = {}) => {
  return axios_ins.get(url, {
    params: params,
    ...config
  })
}
const post = (url, data, config = {}) => {
  return axios_ins.post(url, data, config)
}

export default {
  install(vm) {
    vm.prototype.$reqGet = get;
    vm.prototype.$reqPost = post;
  }
}
