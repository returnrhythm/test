<script setup>
import { ElMessage } from 'element-plus';
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
let modifyNickNameDialogVisible = ref(false)
let modifyPasswordDialogVisible = ref(false)
onMounted(async()=>{
 let id = await tokenRequest.get('/admin/index/user')
 userInfo.value  = await tokenRequest.get(`/admin/user/getUser/${id.data.id}`)
 userInfo.value = userInfo.value.data
 console.log(userInfo.value);
})
const modifyNickName =async() => {
     let modify = await tokenRequest.post('/admin/user/modifyNickName',{id:userInfo.value.id})
     console.log(modify.data);
   }
   let password = ref('请输入要修改的密码')
   let nickName = ref('请输入要修改的昵称')
   const focus1 = () => {
    if(nickName.value === '请输入要修改的昵称')
       nickName.value = ''
   }
   const focus = () => {
    if(password.value === '请输入要修改的密码')
       password.value = ''
   }
   const blur = () => {
       if(password.value === '') password.value = '请输入要修改的密码'
   }
   const blur1 = () => {
       if(nickName.value === '') nickName.value = '请输入要修改的昵称'
   }
   const modifyNickname = async() => {
    if(nickName.value === '请输入要修改的昵称' || nickName.value === ''){
        ElMessage({
        message:'请输入要修改的昵称哦！',
        type:'warning'
    })
        return
    }
       let modify = await tokenRequest.post('/admin/user/alter_nickname',{username:userInfo.value.username,nickname:nickName.value})
       ElMessage({
        message:'修改成功！',
        type:modify.data
       })
       userInfo.value.nickname = nickName.value
       modifyNickNameDialogVisible.value = false
       nickName.value = '请输入要修改的昵称'  
       
    }
   const modifyPassword = async() => {
       let modify = await tokenRequest.post('/admin/user/alter_password',{username:userInfo.value.username,password:password.value})
       ElMessage({
        message:'修改成功！',
        type:modify.data
       })
       modifyPasswordDialogVisible.value = false
       password.value = '请输入要修改的密码'  }
   
</script>
<template>
    <div class="page">
        <div class="userInfo">
           <div class="nickName">
               <span>昵称:{{ userInfo.nickname}} <span class="modify" @click=" modifyNickNameDialogVisible = true">修改</span></span>
           </div> 
           <!-- <div class="nickName">
               <span style="text-wrap:nowrap;">密码:{{ userInfo.password }}</span>
           </div>  -->
           <div class="nickName">
               <span>邮箱:{{ userInfo.email}} </span>
           </div> 
           <div class="nickName">
               <span>角色:{{ userInfo.rolename}}</span>
           </div> 
           <div class="nickName">
               <span class="modifypassword" @click="modifyPasswordDialogVisible = true">修改密码</span>
           </div> 
        </div>
        <div class="profile">
            <span>头像</span>
             <img src="@/assets/photo/7.png" alt="" style="width: 100%; height: 100%">
             <span class="setProfile">设置头像</span>
        </div>
    </div>
    <el-dialog
    v-model="modifyNickNameDialogVisible"
    title="修改昵称"
    width="500"
    :before-close="handleClose"
  >
  <input type="text" class="input-item" v-model="nickName" @click="focus1" @blur="blur1">
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="modifyNickNameDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="modifyNickname()">
          修改
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog
    v-model="modifyPasswordDialogVisible"
    title="修改密码"
    width="500"
    :before-close="handleClose"
  >
    <input type="text" v-model="password" @click="focus" @blur="blur" class="input-item">
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="modifyPasswordDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="modifyPassword()">
          修改
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<style lang="scss" scoped>
.input-item{
    width: 70%;
    height: 0.2rem;
    padding-left: 0.15rem;
    color: rgb(90, 92, 93);
    border-radius: 0.1rem;  
}
.modifypassword{
   color: blue;
   font-size: smaller;
   
}
.modifypassword:hover{
   color: rgb(235, 106, 14);
   font-size: smaller;
   cursor: pointer;
}
.modify{
    color: rgba(3, 3, 248, 0.967);
    font-size: small;
}
.modify:hover{
    color: rgba(248, 85, 3, 0.967);
    font-size: small;
    cursor: pointer;
}
.page{
    font-size: 0.128rem;
    font-weight: 1000;
}
.nickName{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
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