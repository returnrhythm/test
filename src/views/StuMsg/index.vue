<script setup>
import {ref} from 'vue'
//更改jumper文字
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
zhCn.el.pagination.goto = "到第"
//获取数据
let tableData = []
for(let i=0;i<200;i++){
    let data={
    role_id:'伊塔'+i,
    student_id:'202231061101',
    college:'计科院',
    major:'计科',
    grade:'2022',
    class:'4',
    gpa:'2.8',
    comprehensive_assessment:'60'
    }
    tableData.push(data)
}
//获取当前页码
let currentPage=1
let currentData=ref(tableData.slice((currentPage-1)*13,currentPage*13))
let handleCurrentChange=page=>{
    currentPage=page
    currentData.value=tableData.slice((currentPage-1)*13,currentPage*13)
    return 0;
}
//计算页数
const pageCount=Math.ceil(tableData.length/13)
</script>

<template>
  <el-table :data="currentData" 
  table-layout='fixed' 
  height="460px">
    <el-table-column prop="role_id" label="姓名"  />'
    <el-table-column prop="student_id" label="学号"  />
    <el-table-column prop="college" label="学院" />
    <el-table-column prop="major" label="专业" />
    <el-table-column prop="grade" label="年级" />
    <el-table-column prop="class" label="班级" />
    <el-table-column prop="gpa" label="本学期绩点" />
    <el-table-column prop="comprehensive_assessment" label="本学期综测" />
  </el-table>
    <div class="pagination">
        <el-config-provider :locale="zhCn">
            <el-pagination
                :page-size="13"
                :pager-count="7"
                layout="prev, pager, next,jumper"
                :page-count="pageCount"
                @current-change="handleCurrentChange"
            />
        </el-config-provider>
    </div>
</template>

<style  scoped>
.pagination{
    padding-left:20%;
    padding-top: 1.5%;
}
</style>

  