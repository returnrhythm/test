<script setup>
import { onMounted,ref } from 'vue';

import tokenRequest from '../../../utils/tokenRequest';
import { addUsers } from '../../../utils/userManagement';
onMounted(async()=>{
 const userInfo = await tokenRequest.get('/admin/index/userInfo')
 console.log(userInfo);
})
let email = ref(null);
const bindEmail = async() => {
    const userInfo = tokenRequest.get('/admin/index/userInfo');
    console.log(userInfo);
}
</script>
<template>
    <div class="page">
        <div class="bindEmail">
            <div>绑定邮箱:</div>
            <input class="emailInput" v-model="email" type="text">
            <button class="btn" @click="bindEmail">确定</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.page{
    width: 100%;
    height:100%;
}
.emailInput{
    width: 1rem;
    height: 0.2rem;
    background-color: white;
    border: 0;
    margin-right: 0.05rem;
    margin-left: 0.05rem;
}
.bindEmail{
    width: 30%;
    height: 30%;
    background-color: red;
    @include flexCenter;
}
.btn{
    @include flexCenter;
    background-color: blue;
}
</style>