<script setup>
 import {RouterView, useRouter} from 'vue-router'
 import { useStore } from '@/stores/counter'
 import { onMounted, ref } from 'vue'
const router = useRouter()
 const stores  = useStore()
onMounted(()=>{
   if(stores.token === null && localStorage.getItem('token') === null){
    console.log( localStorage.getItem('token'));
    router.push('/person/login')
   //  router.push('/person/user')
 }else{
    console.log('touser页');
    router.push('/person/user')
 }
})

</script>
<template> 
    <RouterView></RouterView>
</template>

<style  scoped>

</style>