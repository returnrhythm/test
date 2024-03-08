<script setup>
import {ref, watch} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from '@/stores/counter'
const router = useRouter()
const store = useStore()
const footer = ref()
const logsw = ref(false)
if(localStorage.getItem('token') !== null){
    logsw.value = true
    store.setToken(localStorage.getItem('token'))
}
const remove = () => {
    localStorage.removeItem('token')
    store.setToken(null)
    router.push('/person/login')
    logsw.value = false
}
watch(() => store.token,(n,o) => {
if(n === null){
    logsw.value = false
}else{
    logsw.value = true
}
})
</script>

<template>
    <el-footer ref="footer">
        <el-row class="row-bg" justify="center">
            <el-col :span="2"><div class="grid-content ep-bg-purple" >关于我们</div></el-col>
            <el-col :span="2"><div class="grid-content ep-bg-purple-light" >商业合作</div></el-col>
            <el-col :span="2"><div class="grid-content ep-bg-purple" >联系我们</div></el-col>
        </el-row>
        <div  @click="remove" class="btn" v-if="logsw">
            <el-tooltip
        class="box-item"
        effect="dark"
        content="退出登录"
        placement="right"
      >
            <img style="width: 0.35rem; position: relative; left: 0.04rem; height: 0.35rem;" src="@/assets/photo/4.png">
        </el-tooltip>
        </div>
    </el-footer>
</template>
<style scoped>
.btn{
    position: relative;
    width: 0.4rem;
    height: 0.4rem;
    left: 8.7rem;
    bottom: 1rem;
    background-color: white;
    box-shadow: 0rem 0rem .056rem .006rem rgb(191, 175, 175);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    letter-spacing: 0.05rem; 
    font-size: 0.15rem;
    float: left;
}
.btn:hover{
    background-color: rgb(230, 215, 215);
    cursor: pointer;
}
.el-footer{
    background-color: #333;
    /* display: inline-block; */
    width: 10rem;
    bottom: 0;
    color: white;
}
.el-row{
    color: white;
    font-size: .111rem;
    
}
</style>