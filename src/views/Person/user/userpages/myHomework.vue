<script setup>
import primaryRequest from '@/utils/primaryRequest'
    const homeworks =  await primaryRequest.get('/schedule/getAllJobs')
console.log(homeworks);
console.log(1);
</script>
<template>
    <div>1</div>
</template>
<style>
</style>