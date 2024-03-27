<script setup>
import { onMounted,ref } from 'vue';

import tokenRequest from '../../../utils/tokenRequest';
const userInfo = ref({
    id:null,
    nickname:null,
    password:null,
    rolename:null,
    username:null,
    verification_code:null
})
onMounted(async()=>{
 let id = await tokenRequest.get('/admin/index/user')
 userInfo.value  = await tokenRequest.get(`/admin/user/getUser/${id.data.id}`)
 userInfo.value = userInfo.value.data
 console.log(userInfo.value);
})
</script>
<template>
    <div class="page">
        <div class="userInfo">
           <div class="nickName">
               <span>昵称:{{ userInfo.nickname}}</span>
           </div> 
           <div class="nickName">
               <span>密码:{{ userInfo.password }}</span>
           </div> 
           <div class="nickName">
               <span>邮箱:{{ userInfo.email}}</span>
           </div> 
           <div class="nickName">
               <span>角色:{{ userInfo.rolename}}</span>
           </div> 
        </div>
        <div class="profile"></div>
    </div>
</template>
<style lang="scss" scoped>
.page{
    font-size: 0.1rem;
    font-weight: 1000;
}
.nickName{
    width: 100%;
    height: 10%;
}
.userInfo{
    width: 90%;
    height: 100%;
    position: absolute;
    left: 5%;
    background-color: rgb(253, 248, 248);
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;  // 居中对齐
}
.userInfo div{
    display: inline-block;
    // background-color: red;
    width: 30%;
    text-align: left;
    position: relative;
    left: 15%;
}
.profile{
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 25%;
    top: 15%;
}
</style>