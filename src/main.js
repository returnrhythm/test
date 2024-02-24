import { createApp } from 'vue'
import './style.css'
import router from './router/index.js'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/global.css'
const app=createApp(App)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router)//全局挂载使用
app.mount('#app')
