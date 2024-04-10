<script lang="ts" setup>
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import { ElMessageBox } from 'element-plus'
  import primaryRequest from '../../utils/primaryRequest'
  const textarea = ref('')
  const dialogSubmit=ref(false)
  const dialogDelete=ref(false)
  const handleSubmit = async() => {
    dialogSubmit .value= false
    if (!textarea.value) {  
        ElMessage({
            message: '语句不能为空',
            type: 'error',
        })
    }else{
    const res = await primaryRequest.post('/report/createClickHouseTable',{
        sql: textarea.value
    })
    console.log(res)
    textarea.value = ''
    ElMessage({
        message: '提交成功',
        type: 'success',
    })
  } 
}
  const handleDelete = () => {
    // 删除textarea中的内容
    dialogDelete.value = false
    textarea.value = ''
    ElMessage({
        message: '删除成功',
        type: 'success',
    })
  }
</script>
<template>
<div class="container">
    <h2>操作clickhouse数据库</h2>
    <el-input
      v-model="textarea"
      style="width: 1000px"
      :rows="15"
      :autosize="false"
      type="textarea"
      placeholder="请输入处理语句"
      resize="none"
      class="left-input"
    />
</div>
<div class="btn-container">
    <div class="btn">
    <el-button type="primary"  size="large" @click="dialogSubmit=true">提交</el-button>
    <el-dialog
    v-model="dialogSubmit"
    title="提交确认"
    width="500"
  >
  <span>确定要提交吗</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogSubmit = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">
          提交
        </el-button>
      </div>
    </template>
  </el-dialog>
    </div>
    <div class="btn">
    <el-button type="danger"  size="large" @click="dialogDelete=true">删除</el-button>
    <el-dialog
    v-model="dialogDelete"
    title="删除确认"
    width="500"
  >
  <span>确定要删除吗</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogDelete = false">取消</el-button>
        <el-button type="primary" @click="handleDelete">
          提交
        </el-button>
      </div>
    </template>
  </el-dialog>
   </div>
</div>
</template>
<style  scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.btn-container{
    margin-top: 30px;
    margin-left: 30px;
  display: flex;
  justify-content: flex-start;
}
.left-input {
    margin-right: auto;
    margin-left: 30px;
    margin-top: 30px;
}
.btn{
    padding: 12px;
}
</style>