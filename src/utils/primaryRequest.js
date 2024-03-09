import axios from "axios"
const primaryRequest = axios.create({
    baseURL:"https://e1b4-117-139-220-203.ngrok-free.app",
    timeout: 60000,
    headers:{
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'anyValue',
    },
    // withCredentials: true
})
//请求拦截器
primaryRequest.interceptors.request.use(function (config) {
    return config
},function(error){
    return Promise.reject(error)
})
//响应拦截器
primaryRequest.interceptors.response.use(function(response){
    return response.data
},function (error){
    return Promise.reject(error)
})

export default primaryRequest
