<script setup>
import { ElMessage } from 'element-plus'
import router from '@/router/index.js';
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const elasidewidth = 0.25*windowWidth;
const elasideheight = 0.1*windowHeight;
//判断有无token
const ifToken=()=>{
  const token=localStorage.getItem('token');
  const res=token?true:false;
  return res;
}
//数据页点击回调函数，有token进入，无token弹警告框
const pushDataPath=()=>{
  const res=ifToken();
  if(res){
    router.push('/data')
  }else{
    ElMessage({
              message: '登陆后查看数据',
              type: 'error',
            })
  }
}
//个人页点击回调(解决在登录页点击个人中心依然能进去的bug)
const pushLoginPath=()=>{
  const res=ifToken();
  if(res){
    router.push('/person')
  }else{
    ElMessage({
              message: '请先登录',
              type: 'error',
            })
    router.push('/person/login')
  }
}
</script>

<template>
            <!-- 头部 -->
            <el-header :height="elasideheight+'px'">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
              <el-menu-item index="0">
              <!-- logo -->
              <router-link to="/"><div class="logo">教育教学数据平台</div></router-link>
              </el-menu-item>
              <!-- 右侧菜单 -->
              <div class="flex-grow" ></div>
              <div @click="pushDataPath"><el-menu-item index="1"><div class="right-menu">查看数据</div></el-menu-item></div>
              <div @click="pushLoginPath"><el-menu-item index="2"><div class="right-menu">个人中心</div></el-menu-item></div>
            </el-menu>
        </el-header>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.logo{
    font-size: 24px;
}
.el-menu-item{
  width: 250px;
}
.right-menu{
  margin: 0px auto;
}
</style>