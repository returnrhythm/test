<script setup>
 import {RouterView, useRouter} from 'vue-router'
 import { useStore } from '@/stores/counter'
 import { ref } from 'vue'
const router = useRouter()
 const stores  = useStore()
 if(stores.token === null && localStorage.getItem('token') === null){
    console.log( localStorage.getItem('token'));
    router.push('/person/login')
 }else{
    router.push('/person/user')
 }

</script>
<template> 
    <RouterView></RouterView>
</template>

<style  scoped>

</style>