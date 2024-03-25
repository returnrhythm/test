<script setup>
import Aside from './components/aside.vue'
</script>

<template>
  <div class="common-layout" style="height:100%">
    <el-container style="height:100%">
      <el-aside width="300px"><Aside></Aside></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<style  scoped>

</style>