import axios from "axios";
 
const tokenRequest = axios.create({
    baseURL:"http://localhost:8080",
    timeout: 60000,
    headers:{
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'anyValue',
        'token' : localStorage.getItem('token')
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

export default tokenRequest;