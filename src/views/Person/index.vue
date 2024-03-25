<script setup>
 import {RouterView, useRouter} from 'vue-router'
 import { useStore } from '@/stores/counter'
 import { onMounted, ref } from 'vue'
 import tokenRequest from '../../utils/tokenRequest';
 import {getRoute} from '../../utils/routerManagement'
const router = useRouter()
 const stores  = useStore()
onMounted(async()=>{
   if(stores.token === null && localStorage.getItem('token') === null){
    router.push('/person/login')
   //  router.push('/person/user')
 }else{
    router.push('/person/user')
 }
})

</script>
<template> 
    <RouterView></RouterView>
</template>

<style  scoped>

</style>