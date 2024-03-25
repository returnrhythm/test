<script lang="ts" setup>
import tokenRequest from '../../../utils/tokenRequest'
//拿到角色
//目前不晓得为啥子拿不到rolename 学生老师还不能根据角色自行切换
const fn=async ()=>{
  const response=await tokenRequest.get('/admin/index/user')
  console.log(response)
}
fn()
const getRole=()=>{
  return 'teacher'
}
const role=getRole()
const ifStu=role==='student'?true:false
const ifTch=role==='teacher'?true:false
</script>
<template>
    <el-row class="tac">
      <el-col :span="16">
        <h2 class="mb-2">菜单栏</h2>
          <el-menu class="el-menu-vertical-demo"  v-if= "ifTch">
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
        <router-link to="/data/tchstu">
          <el-menu-item index="2">
            <span>师生比</span>
          </el-menu-item>
        </router-link>
          <router-link to="/data/workrate">
            <el-menu-item index="3" >
            <span>就业率</span>
          </el-menu-item>
          </router-link>
          <router-link to="/data/workplace">
            <el-menu-item index="4" >
            <span>就业去向</span>
          </el-menu-item>
          </router-link>
          <router-link to="/data/stumsg">
            <el-menu-item index="5" >
            <span>查看所有学生信息</span>
          </el-menu-item>
          </router-link>
          </el-menu>
          <el-menu class="el-menu-vertical-demo"  v-if= "ifStu">
        <router-link to="/data/stuGPA">
          <el-menu-item index="1">
            <span>绩点查询</span>
          </el-menu-item>
        </router-link>
          <router-link to="/data/GPAtrend">
            <el-menu-item index="2" >
            <span>绩点趋势</span>
          </el-menu-item>
          </router-link>
          <router-link to="/data/stuquality">
            <el-menu-item index="3" >
            <span>综测查询</span>
          </el-menu-item>
          </router-link>
          </el-menu>
      </el-col>
    </el-row>
  </template>
  

  