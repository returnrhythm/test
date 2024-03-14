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
            空的用户页
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>