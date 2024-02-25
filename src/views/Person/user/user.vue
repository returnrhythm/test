<script setup>
import {RouterLink,RouterView} from 'vue-router'
import {onMounted, ref, nextTick} from 'vue'
const a = window.innerHeight * 0.08
onMounted(()=>{
    document.getElementById('aside').style.height = (window.innerHeight - a - 0.67 * window.innerWidth/10 ) +'px'
})
window.addEventListener('resize',()=>{
    document.getElementById('aside').style.height = (window.innerHeight - a - 0.67 * window.innerWidth/10) + 'px'
})
</script>
<template>
    <div class="page" id="page" @click="a">
        <el-container>
      <el-aside width="200px" id="aside" style="margin-right: 15px; background-color: rgb(232, 214, 214);">
    <el-row class="tac">
    <el-col :span="12">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        router="true"
      >
        <el-menu-item style="display: flex;justify-content: center; align-items:center;" index="/person/user/myHomework" >
          <span>我的作业</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
    </el-aside>
      <el-main style="background-color: blue;">
    <RouterView></RouterView>    
    </el-main>
        </el-container>
    </div>
</template>
<style scoped>
.link{
    background-color: black;
}
.el-menu-vertical-demo{
width: 200px
}
</style>