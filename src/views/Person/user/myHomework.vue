<script setup>
import tokenRequest from '@/utils/tokenRequest'
import { onMounted } from 'vue';
// onMounted(async()=>{
//     const homeworks =  await tokenRequest.get('/schedule/getAllJobs')
//     console.log('homeworks请求成功',homeworks)
// })
const homeworks = [{

}]
</script>
<template>
    <div class="head">
        <div class="ab"> 1</div>
    </div>
</template>
<style lang="scss" scoped>
.head{
    width: 100%;
    height: 100%;
    background-color:red;
    @include flexCenter;
    
}
</style>