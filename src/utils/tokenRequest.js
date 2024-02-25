import axios from "axios";
 
const tokenRequest = axios.create({
    baseURL:"http://",
    timeout: 60000,
    headers:{
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }
})
//请求拦截器
tokenRequest.interceptors.request.use(function (config) {
    return config
},function(error){
    return Promise.reject(error)
})
//响应拦截器
tokenRequest.interceptors.response.use(function(response){
    return response.data
},function (error){
    return Promise.reject(error)
})

