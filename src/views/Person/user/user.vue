<script setup>
import {useRouter, RouterLink,RouterView} from 'vue-router'
import {onMounted, ref, nextTick} from 'vue'
const router = useRouter();
const a = window.innerHeight * 0.08
onMounted(()=>{
    document.getElementById('aside').style.height = (window.innerHeight - a - 0.67 * window.innerWidth/10 ) +'px'
    document.getElementById('lmain').style.height = (window.innerHeight - a - 0.67 * window.innerWidth/10 ) +'px'
  })
window.addEventListener('resize',()=>{
    document.getElementById('aside').style.height = (window.innerHeight - a - 0.67 * window.innerWidth/10) + 'px'
    document.getElementById('lmain').style.height = (window.innerHeight - a - 0.67 * window.innerWidth/10 ) +'px'
  })
const toMyHomework = () => {
    router.push('/person/user/myHomework')
}
const toUserManagement = () => {
    router.push('/person/user/userManagement')
}
const toUser = () => {
   router.push('/person/user/userPage')
}
</script>
<template>
    <div class="page" id="page">
       <div class="aside" id="aside">
        <div class="user" @click="toUser"> 
          <div style="flex: 1; display: flex;flex-wrap: wrap-reverse;"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
          <div style="flex: 1;">name</div>
        </div>
        <div class="link"> 
          <div @click="toMyHomework">我的作业</div>
          <div @click="toUserManagement">用户管理</div>
        </div>
       </div>
       <div class="main" id="lmain">
          <RouterView style="width: 100%; height: 100%;"></RouterView>
       </div>
    </div>
</template>
<style scoped>

::-webkit-scrollbar {
      width: 0.05rem;
    }

    /* 设置滚动槽的背景色 */
::-webkit-scrollbar-track {
      background-color: rgb(222, 54, 54);
      border-radius: 0.05rem;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgb(3, 3, 12);
      border-radius: 0.05rem;
    }
*{
  margin: 0;
  padding: 0;
}
.aside{
  width: 1.4rem;
  display: inline-block;
  position: absolute;
  left: 0rem;
}
.user{
  width: 1.4rem;
  height: 30%;
  background-color: rgb(51, 51, 51);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.link{
  width: 1.4rem;
  height: 70%;
  background-color: rgb(51, 51, 51);
  overflow-y: scroll;
  overflow-x: hidden;
}
.link div{
  width: 1.4rem;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(250, 250, 250);
}
.link div:hover{

  background-color: rgb(0, 0, 0);
  color: rgb(239, 255, 255);
}
.main{
  width: 8.6rem;
  position: absolute;
  left: 1.4rem;
}
</style>
