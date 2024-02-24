<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>
<template>
    <div class="common-layout">
      <el-container>
        <el-header><Header></Header></el-header>
        <router-view></router-view>
        <Footer></Footer>
      </el-container>
    </div>
</template>
  

<style scoped>

</style>
