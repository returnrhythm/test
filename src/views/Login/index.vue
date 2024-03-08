<script setup>
import {ref , onMounted,nextTick, watch} from 'vue'
import {useRouter} from 'vue-router'
import { useStore } from '@/stores/counter';
import primaryRequest from '@/utils/primaryRequest'
import { ElMessage } from 'element-plus'
const router = useRouter()
const Store = useStore()
const page = ref(null)
const top = window.innerHeight * 0.35
onMounted(async()=>{
   page.value.style.height = Store.height + 'px' 
})
window.addEventListener('resize',()=>{
    // console.log('是',Store.height);
    page.value.style.height = Store.height + 'px'
})
let logintext = ref();
logintext.value = '大数据平台'
const login = ref();
const register = ref();
 let loginsw = ref(true)
 const account = ref("账号")
const password = ref("密码")
const repassword = ref("确认密码")
const accountre = ref()
const passwordre = ref()
const repasswordre = ref()
//前往注册页
const toregister = () => {
    nextTick(() => {
        // 在这里访问 ref 的值
        // repasswordre.value.type = "password"
        login.value.classList.remove('anm2');
        register.value.classList.remove('anm3');
        login.value.classList.add('anm');
        register.value.classList.add('anm1');
        loginsw.value = false;
        register.value.style.background = 'rgba(0,0,0,0.5)';
        login.value.style.background = 'rgba(255,255,255,0.5)';
    });
};
//前往登录页
const to = ()=>{
    login.value.classList.remove('anm')
    register.value.classList.remove('anm1')
    login.value.classList.add('anm2')
    register.value.classList.add('anm3')
    loginsw.value = true
    login.value.style.background = 'rgba(0,0,0,0.5)'
    register.value.style.background = 'rgba(255,255,255,0.5)'
    repassword.value = '确认密码'
}

//登录注册功能数据

//聚焦清空输入框内字体
const focuson0 = ()=>{
    if(account.value === '账号')
account.value = ""
}
const focuson1 = ()=>{
    if(password.value === '密码'){
password.value = ""
passwordre.value.type = "password"
}
}
const focuson2 = ()=>{
    if(repassword.value === '确认密码'){
repassword.value = ""
repasswordre.value.type = "password"
}
}
//失焦回复输入框默认字体
const bluron0 = ()=>{
    if(account.value.replace(/\s*/g, '')===''){
account.value = "账号"
    }
}
const bluron1 = ()=>{
  if(password.value.replace(/\s*/g, '')===''){
password.value = "密码"
passwordre.value.type = 'text'
  }
}
const bluron2 = ()=>{
if(repassword.value.replace(/\s*/g, '')===''){
    repassword.value = "确认密码"
    repasswordre.value.type = 'text'
  }
}
//注册功能密码和确认密码对比提示的实现
//注册
const registerSubmit = async () => {
  const response =  await primaryRequest.post('/admin/user/addUser',{
            id:null,
            username:account.value,
            password:password.value,
            roleName:null,
    })
    console.log(response);
    ElMessage({
    message: response.data,
    type:response.message
  })
}
//点击登录，去主页面
const loginSubmit = async () => {
    try {
        const response = await primaryRequest.post('/admin/index/login', 
        {
            id:null,
            username:account.value,
            password:password.value,
            roleName:null
        });
        console.log(response);
        // const response = await primaryRequest.get('/schedule/getAllJobs')
        if(response.message === 'success'){
            ElMessage({
              message: '登录成功',
              type: 'success',
            })
            Store.setToken(response.data)
            localStorage.setItem('token', response.data);
            router.push("/person/user");
        }else{
            ElMessage({
              message: response.data,
              type: 'warning',
            })
        }
    } catch (error) {
console.log('错误',error);
ElMessage({
              message: '登录失败，可联系管理员',
              type: 'warning',
            })
// Store.setToken('1')
// router.push("/person");
    }
}
//两次密码对比
const resw = ref(null)
watch(repassword,(n,o) => {
    if(n === password.value ){
         console.log('是');
    }else{
         console.log('否');
         resw.value = false
    }
})
</script>
<template>
<div class="page" style="height: 100%; height: 100px;"  ref="page"> 
  <div class="contain" :style="{top:top+'px'}">
    <div class="register" ref="register">
        <block v-if="loginsw">
            <button @click="toregister" class="btn" style="top: -0.05rem;">没有账号？去注册</button>
        </block>
        <block v-else>
            <button @click="to" class="btn" style="top: -0.05rem;">已注册？去登录</button>
        </block>
    </div>   
    <div class="login" ref="login">
         <div class="log">
            <block v-if="loginsw">
                登录页
            </block>
            <block v-else>
                注册页0
            </block>
        </div>
         <div class="bloc" >
            <input type="text"  v-model="account" @focus="focuson0" @blur="bluron0" class="input" ref="accountre">
            <input type="text" v-model="password" @focus="focuson1" @blur="bluron1" class="input" ref="passwordre">
         <block v-if="loginsw === false">
            <input type="text"  v-model="repassword" @focus="focuson2" @blur="bluron2" class="input" ref="repasswordre">         
        </block>
            <block v-if="loginsw">      
                <button class="btn" @click="loginSubmit" style="opacity: 1;" >登录</button>
            </block>
            <block v-else>
                <button class="btn" @click="registerSubmit"> 注册</button>
            </block>
            <br>
           <block v-if="loginsw">
            <div class="forg">
            忘记密码？
            </div>
           </block>
        </div>
        
    </div>
  </div>
</div>
</template>

<style scoped>

@keyframes rtoregister{
    0%{
        left: 0rem;
    }
    100%{
        left:-3.333rem;
    }
}
@keyframes ltoregister{
    0%{
        left: 0rem;
    }
    100%{
        left:3.333rem;
    }
}
@keyframes rtoregisterb{
    0%{
        left: -3.333rem;
    }
    100%{
        left:0rem;
    }
}
@keyframes ltoregisterb{
    0%{
        left: 3.333rem;
    }
    100%{
        left:0rem;
    }
}
.anm{
    animation-name: rtoregister;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
.anm1{
    animation-name: ltoregister;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
.anm2{
    animation-name: rtoregisterb;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
.anm3{
    animation-name: ltoregisterb;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
.btn{
    background-color: rgb(16, 53, 94);
    position: relative;
    flex: 1;
    height: .3rem;
    width: 2.0rem;
    font-size: 0.098rem;
    border-radius: 0.07rem;
    color: rgb(245, 205, 245);
    border: 0px;
}
.btn:hover{
    background-color: rgb(16, 44, 94);
}
.line{
    width: 1.889rem; 
    height: .017rem; 
    background-color: black;
    position: relative;
    top: -0.1rem;
    left:0.07rem
}

.bloc{
    flex: 3;
    display: inline-block;
    flex-direction: column;
    /* background-color: red; */
}
.input{
width: 2rem;
height: 0.3rem;
border: 0px solid;
padding-left: .106rem;
background-color: rgba(16, 53, 94,1);
font-size: .098rem;
color: rgb(245, 205, 245);
margin-bottom: .196rem;
border-radius: 0.05rem;
}
.page{
    display: flex;
    width: 10rem;
    height: 100%;
    background-color: #fff;
    align-items: center;
}
div{
    display: inline-block;
}
.log{
    flex: 1;
    display: flex;
    justify-content: center;
    height: 0.5rem;
    background-color: rgba(1, 1, 1, 0);
    color: rgb(191, 193, 96);
    align-items: center;
    border:0px rgb(73, 54, 54) solid;
    font-size: 0.2rem;
}
.contain{
    width: 6.666rem;
    height: 3.333rem;
    background-color: rgba(94, 144, 178, 0.2);
    display: flex;
    color: rgba(15, 10, 3, 1);
    position: relative;
    top: 1rem;
    left: 1.665rem;
}
.login{
    position: relative;
    font-size: .111rem;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    width: 100%;
    height: 100%;
    border:0px rgb(73, 54, 54) solid;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.register{
    display: flex;
    position: relative;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255,0.5);
}
.forg{
   position: relative;
   top: 0.3rem;
   
}
</style>