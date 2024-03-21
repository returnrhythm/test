<script setup>
import tokenRequest from '../../../utils/tokenRequest';
import {onMounted,ref} from 'vue';
import { removeRole,addRole } from '../../../utils/userManagement.js';
import { ElMessage,ElMessageBox } from 'element-plus';
let roles = []
const dialogVisible = ref(false)
const roleName = ref('请输入想要添加的角色')
const roleNameFocus = () => {
    if(roleName.value === '请输入想要添加的角色'){
        roleName.value = ''
    }
}
const roleNameBlurs = () => {
    if(roleName.value === ''){
        roleName.value = '请输入想要添加的角色'
    }
}
const addRoles = (name) => {
    if( addRole(name) ){
        roles.push({id:null, roleName:name})
        linkto(pageNumber.value)
        dialogVisible.value = false
    }else{
        ElMessage({
            message:'请求失败，可能是网络问题哦！',
            type:'error'
        })
    }
}
onMounted(async()=>{
try{
    roles = await tokenRequest.get('/admin/role/getAllRoles')
    roles = roles.data
    linkto(1)
    console.log('roles请求成功',roles);
}catch(error){
    console.log(error);}
})
const fnum = '<<';
const ffnum = '<';
const num1 = '...';
let active = ref(null)
let lactive = ref(null)
const num2= 0;
const llnum = '>';
const lnum = '>>';
let all = ref(0);
let pageNumber = ref(1);
let to = ref('输入想去的页');
const getIndex = (item) => roles.findIndex((element) => {return element.id === item})
   //前往指定页，将active改变为指定页
   const linkto = (num) => { 
    all.value = roles.length === 0 ? 1 : roles.length % 8 === 0 ? Math.floor(roles.length / 8) : Math.floor(roles.length / 8) + 1;
    num = parseInt(num)
    if(num > all.value){
        ElMessage({
        message:'还没有这么多页哦，已为您跳到最后一页'
       })
       pageNumber.value = all.value
       num = all.value
    } 
    if(num < 1){
        ElMessage({
        message:'数值太小，跳到第一页了哦'
       })
       pageNumber.value = 1
       num = 1
    }
    if(isNaN(num)){
        ElMessage({
        message:'请输入数字哦'
       })
        return
    }
    console.log('num',num);
    if(num < 1){
       ElMessage({
        message:'已经是第一页了哦'
       })
       return 
    }
    if(num > all.value){
       ElMessage({
        message:'已经是最后一页了哦'
       })
       return 
    }
    pageNumber.value = num
       //获取浅拷贝数组
       lactive.value = roles.slice((num-1)*8,(num-1)*8+8)
       //深拷贝
       active.value = JSON.parse(JSON.stringify(lactive.value))
       
}
linkto(pageNumber.value)
  //到最后和到最前
const tofnum = () => {
    linkto(1)
}
const tolnum = () => {
    linkto(all.value)
}
const linkInputFoucus = () => {
          to.value = ''  
}
const linkInputBlur = () => {
    if(to.value === ''){
      to.value = '输入想去的页'
    }
}
const removeRoles = async(id) => {

    await ElMessageBox.confirm(
        '将会彻底删除此角色，要继续吗？',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(async() => {
            if( await removeRole(id) ){
        ElMessage({
        message:'删除成功',
        type:'success'
        })
    roles.splice(getIndex(id),1)
            }else{
    ElMessage({
        message:'删除失败了。可能是网络问题',
        type:'error'
    })
            }
        }).catch((error) => {
            console.error('发生错误:', error);
            console.log('具体错误信息:', error.message); 
            ElMessage({
            type: 'info',
            message: '删除已取消',
          })
        })
    linkto(pageNumber.value)
}

</script>
<template>
    <span class="page" v-loading="load">
    <div class="head">
         <span style="flex:2">角色名称</span>
         <span style="flex:1">操作</span>
    </div>
    <div class="item" v-for="(item,index) in active" :key="index">
         <span style="flex:2">{{ item.roleName }}</span>
         <span style="flex:1">
         <span class="delete" @click="removeRoles(item.id)">删除</span>
        </span>
    </div>
    <div class="footer" id="foot">  
        <div class="pageLink" id="pagelink">
            <span class="page1">
     <block><span class="pageIndex" @click="tofnum">{{ fnum }}</span></block> 
     <block><span class="pageIndex" @click="linkto(pageNumber-1)">{{ ffnum }}</span></block>
            </span>
            <span class='page2'>
     <block v-if="pageNumber > 1+1"><span class="pageIndex" @click="linkto(1)"> 1 </span></block> 
     <block v-if="(pageNumber-2) > 1"><span class="pageIndex">{{num1}} </span></block>
     <block v-if="pageNumber > 1"><span class="pageIndex" @click="linkto(pageNumber-1)">{{pageNumber-1}} </span></block>
              
     <block ><span class="pageIndex" @click="linkto(pageNumber)" style="background-color: rgb(51, 51, 51); color: white;">{{ pageNumber }}</span></block> 
     <block v-if="pageNumber <all-1"><span class="pageIndex" @click="linkto(pageNumber+1)">{{pageNumber+1}} </span></block>
     <block v-if="(all-pageNumber) > 2"><span class="pageIndex">{{ num1 }}</span></block> 
     <block v-if="pageNumber < all"><span class="pageIndex" @click="linkto(all)">{{ all }}</span></block>
            </span>        
             <span class="page3">
     <block><span class="pageIndex" @click="linkto(pageNumber+1)">{{ llnum }}</span></block> 
     <block><span class="pageIndex" @click="tolnum">{{ lnum }}</span></block>
     <input type="text" v-model="to" class="linkInput" @focus="linkInputFoucus" @blur="linkInputBlur" ><button class="linkBtn" @click="linkto(to)"><i class="fa-solid fa-arrow-right-to-bracket"></i></button>
            </span>
            <span class="page4">
             
            </span>
        </div>
        <div class="add" @click="dialogVisible = true">
            <span>添加角色<i class="fas fa-plus-circle" style="padding-left: 0.01rem;"></i></span>
        </div>
    </div>

    </span>
    <el-dialog
    v-model="dialogVisible"
    title="增加角色"
    width="2.5rem"
    :before-close="handleClose"
  >
    <span style="display: flex; flex-direction: column; align-items: center; ">
      <span>角色名字: <input class="inpt" type="text" v-model="roleName" @focus="roleNameFocus" @blur="roleNameBlurs">
      </span>
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addRoles(roleName)">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<style lang="scss" scoped>
// @import '@fortawesome/fontawesome-free/css/all.css';
.page{
    font-size: 0.1rem;
    overflow-y:auto;
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content:first baseline;
    align-items: center;
    flex-wrap: wrap;
}
.delete{
    color: blue;
}
.delete:hover{
    color: red;
    cursor: pointer;
}
.head{
    width: 100%;
    height: 10%;
    background-color: rgb(51, 51, 51);
    color: aliceblue;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
}
.item{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
}
// .item span{
 
// }
.add{
    @include flexCenter;
    width: 10%;
    height: 100%;
    margin-left: auto;
}
.add:hover{
    background-color: rgb(219, 199, 199);
}
.footer{
    width: 100%;
    
    height:10%;
    background-color: rgb(253, 235, 235);
    margin-top: auto;
    display: flex;
}
.pageLink{
width: 90%;
height: 100%;
@include flexCenter;
}
.page1{
    display: flex;
    flex: 3;
    justify-content:end;
}
.page2{
    display: flex;
    flex: 4;
    justify-content: center;
}
.page3{
    display: flex;
    flex: 3;
    align-items: center;
}
.page4{
    @include flexCenter;
    flex:3;
    background-color: red;
}
.pageIndex{
    @include flexCenter;
    width: 0.25rem;
    height: 0.25rem;
    margin:0.025rem;
    color: black;
    background-color: rgb(255, 255, 255);
    font-size: .1rem;
    &:hover{
    background-color: rgb(51, 51, 51);
    color: rgb(250, 250, 250);
    cursor: pointer;
    }
}
.linkInput{
    width: 0.5rem;
    height: 0.25rem;
    font-size: 0.06rem;
    border: 0;
}
.linkBtn{
    width: 0.25rem;
    height: 0.25rem;
    background-color: white;
    @include flexCenter;
    font-size: 0.07rem;
}
.linkBtn :active{
    background-color: rbg(51, 51, 51);
}
.item span{
   width: 1rem;
   height: 100%;
   word-wrap: break-word;
}
.inpt{
    width: 1rem;
    height: 0.2rem;
    border: 0.00001rem solid rgb(225, 211, 211);
}
</style>