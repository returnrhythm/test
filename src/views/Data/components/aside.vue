<script lang="ts" setup>
</script>
<template>
    <el-row class="tac">
      <el-col :span="16">
        <h5 class="mb-2">菜单栏</h5>
        <el-menu>
          <router-link to="/data/data_GPA">
          <el-menu-item index="1">
            <span>绩点分析</span>
          </el-menu-item>
        </router-link>
        <router-link to="/data/data_tchstu">
          <el-menu-item index="2">
            <span>师生比</span>
          </el-menu-item>
        </router-link>
          <router-link to="/data/data_workrate">
            <el-menu-item index="3" >
            <span>就业率</span>
          </el-menu-item>
          </router-link>
          <router-link to="/data/data_workplace">
            <el-menu-item index="4" >
            <span>就业去向</span>
          </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </template>
  

  