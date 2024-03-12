<script setup>
import {ref , onMounted,nextTick, watch} from 'vue'
import {useRouter} from 'vue-router'
import { useStore } from '@/stores/counter';
import primaryRequest from '@/utils/primaryRequest'
import { ElMessage } from 'element-plus'
import { addUsers } from '../../utils/userManagement';
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
let loginEmailsw = ref(false)
const account = ref("账号")
const loginemail = ref("邮箱")
const verification_code = ref('验证码')
const password = ref("密码")
const repassword = ref("确认密码")
const accountre = ref()
const loginemailre = ref()
const verification_codere = ref()
const passwordre = ref()
const repasswordre = ref()
const email = ref("邮箱（可不填）")
const emailre = ref()
const btn1 = ref()
const btn2 = ref()
const btn3 = ref()
const btn4 = ref()
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
    });
};
//前往登录页
const to = ()=>{
    login.value.classList.remove('anm')
    register.value.classList.remove('anm1')
    login.value.classList.add('anm2')
    register.value.classList.add('anm3')
    loginsw.value = true
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
const focuson3 = ()=>{
    if(email.value === '邮箱（可不填）')
email.value = ""
}
const focuson4 = ()=>{
    if(loginemail.value === '邮箱')
    loginemail.value = ""
}
const focuson5 = ()=>{
    if(verification_code.value === '验证码')
verification_code.value = ""
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
const bluron3 = ()=>{
if(email.value.replace(/\s*/g, '')===''){
    email.value = "邮箱（可不填）"
  }
}
const bluron4 = ()=>{
if(loginemail.value.replace(/\s*/g, '')===''){
    loginemail.value = "邮箱"
  }
}
const bluron5 = ()=>{
if(verification_code.value.replace(/\s*/g, '')===''){
    verification_code.value = "验证码"
  }
}
//注册功能密码和确认密码对比提示的实现
//注册
const registerSubmit = async () => {
    addUsers(account.value,password.value,'管理员','000','2031895172@qq.com')
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
//去邮箱登录
const toEmail = () => {
    loginEmailsw.value = true
}
//去账号登录
const tolog = () => {
    loginEmailsw.value = false
}
</script>
<template>
<div class="page" style="height: 100%; height: 100px;"  ref="page"> 
  <div class="contain" :style="{top:top+'px'}">
    <div class="register" ref="register">
        <block v-if="loginsw" ><img class="cimg" src="../../assets/photo/5.png" alt=""></block>
        <block v-else><img class="cimg" src="../../assets/photo/6.png" alt=""></block>
        <block v-if="loginsw">
            <button @click="toregister" class="btn" style="top: -0.05rem;" ref="btn1">没有账号？去注册</button>
        </block>
        <block v-else>
            <button @click="to" class="btn" style="top: -0.05rem; " ref="btn2">已注册？去登录</button>
        </block>
    </div>   
    <div class="login" ref="login">
         <div class="log">
            <block v-if="loginsw">
                <span style="color: black;">
                登录
                </span>
            </block>
            <block v-else>
                <span style="color: black;">
                注册
                </span>
            </block>
        </div>
         <div class="bloc" >
            <block v-if="loginEmailsw === false">
            <input type="text" v-model="account" @focus="focuson0" @blur="bluron0" class="input" ref="accountre">
            <input type="text" v-model="password" @focus="focuson1" @blur="bluron1" class="input" ref="passwordre">
            </block>
            <block v-else>
            <input type="text"  v-model="loginemail" @focus="focuson4" @blur="bluron4" class="input" ref="loginemailre">
            <div>
            <input type="text" v-model="verification_code" @focus="focuson5" @blur="bluron5" class="input" ref="verification_codere" style="width: 1.3rem;">
            <button style="width: 0.6rem; background-color: white; border: 0.0001rem solid rgb(223, 223, 223); margin-left: 0.1rem; font-size: 0.1rem;">发送</button>
            </div>
            </block>
         <block v-if="loginsw === false">
            <input type="text"  v-model="repassword" @focus="focuson2" @blur="bluron2" class="input" ref="repasswordre">  
            <input type="text" v-model="email" class="input" @focus="focuson3" @blur="bluron3" ref="emailre">       
        </block>
            <block v-if="loginsw">      
                <button class="btn" @click="loginSubmit" ref="btn3">登录</button>
            </block>
            <block v-else>
                <button class="btn" @click="registerSubmit" ref="btn4">注册</button>
            </block>
            <br>
           <block v-if="loginsw">
            <div class="forg">
            忘记密码？
            </div>
            <block v-if="loginEmailsw === false">
            <div class="forg" @click="toEmail">
            邮箱登录
            </div>
            </block>
            <block v-else>
            <div class="forg" @click="tolog">
            账号登录
            </div>
            </block>
           </block>
        </div>
        
    </div>
  </div>
</div>
</template>

<style scoped>
.cimg{
    width: 2rem;
    height: 2rem;
}
@keyframes rtoregister{
    0%{
        left: 0rem;
    }
    100%{
        left:-3rem;
    }
}
@keyframes ltoregister{
    0%{
        left: 0rem;
    }
    100%{
        left:3rem;
    }
}
@keyframes rtoregisterb{
    0%{
        left: -3rem;
    }
    100%{
        left:0rem;
    }
}
@keyframes ltoregisterb{
    0%{
        left: 3rem;
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
    background: linear-gradient(to right, rgb(53, 235, 232),rgb(54, 178, 242), rgb(62, 96, 229));
    position: relative;
    flex: 1;
    height: .25rem;
    width: 2.0rem;
    font-size: 0.098rem;
    border-radius: 0.07rem;
    color: rgb(254, 254, 254);
}
.btn:hover{
    
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
    flex: 6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
}
.input{
width: 2rem;
height: 0.25rem;
border: 0.0005rem solid rgb(223, 223, 223);
padding-left: .106rem;
background-color: white;
font-size: .098rem;
color: rgb(13, 13, 13);
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
    color: rgb(191, 193, 96);
    align-items: center;
    font-size: 0.2rem;
}
.contain{
    width: 6rem;
    height: 2.6rem;
    display: flex;
    color: rgba(15, 10, 3, 1);
    position: relative;
    top: 1rem;
    left: 1.665rem;
    box-shadow: 0rem 0rem 0.04rem 0.01rem rgb(51,51,51);
}
.login{
    
    position: relative;
    font-size: .111rem;
    width: 100%;
    height: 100%;
    /* border:0.01rem rgb(73, 54, 54) solid; */
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
  
}
.register{
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content:space-evenly;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: white;
}
.forg{
   position: relative;
   top: 0rem;
   padding-left: 0.3rem;
   padding-right: 0.3rem;
   cursor: pointer;
   color: blue;
}
</style>