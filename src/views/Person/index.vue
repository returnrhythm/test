<script setup>
<<<<<<< HEAD
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
=======

</script>

<template>
    我是person页还没做好
>>>>>>> dfa7f62a734889e48852b33954bd529f2d1b2509
</template>

<style  scoped>

</style>