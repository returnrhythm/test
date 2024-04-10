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
           <!-- <div class="nickName">
               <span style="text-wrap:nowrap;">密码:{{ userInfo.password }}</span>
           </div>  -->
           <div class="nickName">
               <span>邮箱:{{ userInfo.email}}</span>
           </div> 
           <div class="nickName">
               <span>角色:{{ userInfo.rolename}}</span>
           </div> 
        </div>
        <div class="profile">
            <span>头像</span>
             <img src="@/assets/photo/7.png" alt="" style="width: 100%; height: 100%">
             <span class="setProfile">设置头像</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.page{
    font-size: 0.128rem;
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
    background-color: rgb(249, 250, 250);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0rem 0rem 0.03rem 0.01rem rgb(228, 201, 201);
}
.userInfo div{
    display: inline-block;
    // background-color: red;
    width: 30%;
    text-align: left;
    position: relative;
    left: 15%;
    margin-top: 0.1rem;
}
.profile{
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 25%;
    top: 20%;
}
.setProfile{
     position: relative;
     top: 0.3rem;
     width: 100%;
     height: 0.3rem;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 0.5rem;
     background-color: rgb(234, 213, 213);
}
.setProfile:hover{
    background-color: rgb(234, 157, 157);
    cursor: pointer;
}
</style>