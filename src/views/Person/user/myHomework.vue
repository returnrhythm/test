<script setup>
import tokenRequest from '@/utils/tokenRequest'
import { onMounted } from 'vue';
onMounted(()=>{
    tokenRequest.get('')
})
</script>
<template>
    <div class="head">
        <div class="ab"> 还没有作业哦~~ </div>
    </div>
</template>
<style lang="scss" scoped>

</style>