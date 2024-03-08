<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import { onMounted, nextTick, ref } from 'vue'
const headerHeight = ref(0)
 headerHeight.value = window.innerHeight * 0.08
 let a = window.innerHeight * 0.08
const height = ref(0)
height.value = window.innerHeight * 0.92 - window.innerWidth/10 * 0.4
window.addEventListener('resize',()=>{
  height.value = window.innerHeight - window.innerWidth/10 * 0.4 - a 
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header :style="{height: headerHeight+'px'}"><Header></Header></el-header>
      <el-main class="main" id="main" :style="{ height: height + 'px' }"><router-view></router-view></el-main>
      <Footer class="footer"></Footer>
    </el-container>
  </div>
</template>

<style scoped>
.main {
  /* background-color: red; */
  width: 10rem;
  height: 600px;
  display: inline-block;
}
.footer {
  width: 10rem;
  height: .4rem;
  display: inline-block;
  position: fixed;
  bottom: 0;
}
</style>
