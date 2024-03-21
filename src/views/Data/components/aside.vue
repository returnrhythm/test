<script lang="ts" setup>
</script>
<template>
    <el-row class="tac">
      <el-col :span="16">
        <h2 class="mb-2">菜单栏</h2>
          <el-menu class="el-menu-vertical-demo">
              <el-sub-menu index="1">
                <template #title>
              <div>
                <span>绩点分析</span>
              </div>
            </template>
            <router-link to="/data/GPA/course"><el-menu-item index="1-1">课程分析</el-menu-item></router-link>
          <router-link to="/data/GPA/major"><el-menu-item index="1-2">专业分析</el-menu-item></router-link>
          <router-link to="/data/GPA/method"><el-menu-item index="1-3">教学方式绩点分析</el-menu-item></router-link>  
        </el-sub-menu>
        <router-link to="/data/datatchstu">
          <el-menu-item index="2">
            <span>师生比</span>
          </el-menu-item>
        </router-link>
          <router-link to="/data/dataworkrate">
            <el-menu-item index="3" >
            <span>就业率</span>
          </el-menu-item>
          </router-link>
          <router-link to="/data/dataworkplace">
            <el-menu-item index="4" >
            <span>就业去向</span>
          </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </template>
  

  