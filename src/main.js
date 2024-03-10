import { createApp } from 'vue'
import './style.css'
import router from './router/index.js'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/global.css'
import { createPinia } from 'pinia'
const app=createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(createPinia())
app.use(router)//全局挂载使用
app.mount('#app')
function resetHtmlFont(){
    document.documentElement.style.fontSize = window.innerWidth/10 + 'px'
}
resetHtmlFont()
window.onresize = resetHtmlFont
// const app=createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// app.use(router)//全局挂载使用
// app.mount('#app')
