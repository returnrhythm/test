<script setup>
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const elasidewidth = 0.25*windowWidth;
const elasideheight = 0.15*windowHeight;
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
              <router-link to="/data"><el-menu-item index="1"><div class="right-menu">查看数据</div></el-menu-item></router-link>
              <router-link to="/person"><el-menu-item index="2"><div class="right-menu">个人中心</div></el-menu-item></router-link>
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