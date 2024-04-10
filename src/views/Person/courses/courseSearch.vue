<script setup>
import { ref } from "vue";
import tokenRequest  from "@/utils/tokenRequest.js";
import { ElMessage } from "element-plus";
   let search = ref('请输入您的学号');
   const focus = () => {
        search.value = '';
    }
    const blur = () => {
        if (search.value === '') {
            search.value = '请输入您的学号';
        }
    }
    let a = ref('0')
    let b = ref('0')
    let c = ref('0')
    let d = ref('0') 
    const searchCourse = async() => {
        console.log(search.value);
        let result = await tokenRequest.get('/Generalstatistic/GetCourse_byStu_id',{
            params: {studentId: search.value}
        })
        console.log(result);
        if(result.data === ''){
            ElMessage({
                message:'没有查询到您的课程哦！',
                type:"warning"
            })
            return
        }
        let e = result.data.split(" ");
        a.value = e[0];
        b.value = e[1];
        c.value = e[2];
        d.value = e[3];
        dialogVisible.value = true;
    }
    let dialogVisible = ref(false);
    const handleClose = () => {
        dialogVisible.value = false;
    }
</script>
<template>
<div class="page">
     <div class="search">
        <div class="icon">
            <img style="width: 0.3rem; height: 0.3rem;" src="@/assets/photo/8.png" alt=""/>
        </div>
        <input @click="focus" @blur="blur" class="input" v-model="search" type="text">
        <button @click="searchCourse">查找</button>
     </div>
</div>
<el-dialog
    v-model="dialogVisible"
    title="查询结果"
    width="700"
    :before-close="handleClose"
>
<el-descriptions title="课程信息"
 border
>
    <el-descriptions-item label="学号">{{ a }}</el-descriptions-item>
    <el-descriptions-item label="课程号">{{ b }}</el-descriptions-item>
    <el-descriptions-item label="任课教师">{{ d }}</el-descriptions-item>
    <el-descriptions-item label="课程名称">{{ c }}</el-descriptions-item>
</el-descriptions>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<style scoped>
.headLine{
    font-size: 0.2rem;
}
.icon{
    height: 100%;
    width:  10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
}
.search button{ 
    height: 100%;       
    width: 25%;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: rgb(51, 51, 51);
    color: rgb(249, 246, 246);
}
.page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.search{
   width: 60%;
   height: 12%;
    margin-bottom: 0.3rem;  
   border-radius: 1rem;
   background-color: rgb(255, 255, 255);  
   display: flex; 
   border: 0.015rem solid rgb(51, 51 ,51);
   font-size: 0.15rem;
}
.input{
    width: 70%;
    height: 100%;
    border: 0;
    padding-left: 0.1rem;
    font-size: 0.15rem;
    font-size: 0.15rem;
}
input:focus {
    outline: 0;
}
</style>




