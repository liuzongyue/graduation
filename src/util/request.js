import axios from 'axios'
import { Message } from 'element-ui'
// import router from "../router";
const service = axios.create({
  baseURL:"http://localhost:3000",
  timeout:5000
})
//请求拦截器
// service.interceptors.request.use(
//   config => {
//     console.log(config)
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
//响应拦截器
service.interceptors.response.use(
  response => {
    // const res = response.data
    // if(res.code != 200){
    //   Message({
    //     message:'Error',
    //     type:'error',
    //     duration:5*1000
    //   })
    // }else{
      return response
    // }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service