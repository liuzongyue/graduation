import request from "@/util/request"
// const baseURL = 'localhost:3000'

//登录
export  function login(data){
  return request({
    url:`/login/user`,
    method:'post',
    data
  })
}
//注册
export function register(data){
  return request({
    url:`/login/register`,
    method:'post',
    data
  })
}
//验证码
export function verification_code(data){
  return request({
    url:`/login/verification_code`,
    method:'post',
    data
  })
}
