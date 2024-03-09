<script setup>
import tokenRequest from '@/utils/tokenRequest'
import { computed, reactive,ref} from 'vue'
import { ElMessage, ElMessageBox} from 'element-plus';
import { onMounted } from 'vue';
onMounted(async()=>{
    const ausers =  await tokenRequest.get('/admin/user/getAllUsers')
    console.log('users请求成功',ausers)
    users = ausers.data
    console.log(users);
    linkto(1)
})
let pageNumber = ref(1);
let users = reactive([])
const getIndex = (item) => users.findIndex((element) => {return element.id === item})
const remove = async(a) =>{
    // const removeitem = await tokenRequest.get('/admin/user/deleteUser/{userId}',{
    //     userId:a
    // })
    // console.log(removeitem);
    
ElMessageBox.confirm(
    '将会彻底删除此账号，要继续吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
        users.splice(getIndex(a),1)
        linkto(pageNumber.value)
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '删除已取消',
      })
    })
}
const add = async() => {
    users.push({
        id:null,
        username:'1000',
        password:'1111111111111111111111111111111111111111',
        rolename:'学生',
        nickname:'西柚悍匪'
    })
    // const addItem = await tokenRequest.post('/admin/user/addUser',{
    //     id:null,
    //     username:'10000',
    //     password:'Zz111111111',
    //     rolename:'学生',
    //     nickname:'西柚悍匪'
    // });
    // console.log(addItem);
    // if(addItem.message === 'fail'){
    //     ElMessage({
    //     message:addItem.data,
    //     type:'error'
    // })
    // }
    linkto(pageNumber.value)
}
//下方数字导航
const fnum = '<<';
const ffnum = '<';
const num1 = '...';
let active = ref(null)
let lactive = ref(null)
const num2= 0;
const llnum = '>';
const lnum = '>>';
let all = ref(0);
let to = ref('输入想去的页');
// let linkStyle = ref(null)
   //前往指定页，将active改变为指定页
const linkto = (num) => { 
    all.value = users.length === 0 ? 1 : users.length % 8 === 0 ? Math.floor(users.length / 8) : Math.floor(users.length / 8) + 1;
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
       lactive.value = users.slice((num-1)*8,(num-1)*8+8)
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
</script>
<template>
    <span class="page">
    <div class="head">
         <span style="flex:1">账号</span>
         <span style="flex:2">密码</span>
         <span style="flex:2">邮箱</span>
         <span style="flex:1">角色</span>
         <span style="flex:1">昵称</span>
         <span style="flex:1">操作</span>
    </div>
    <div class="item" v-for="(item,index) in active" :key="index">
         <span style="flex:1">{{ item.username}}</span>
         <span style="flex:2">{{ item.password }}</span>
         <span style="flex:2">{{ item.email }}</span>
         <span style="flex:1">{{ item.rolename }}</span>
         <span style="flex:1">{{ item.nickname }}</span>
         <span style="flex:1">
         <span class="delete" @click="remove(item.id)">删除</span>
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
        <div class="add" @click="add">
            <span>添加账号 <i class="fas fa-plus-circle" style="padding-left: 0.01rem;"></i></span>
        </div>

    </div>
  
    </span>
</template>
<style lang="less" scoped>
@import '@/assets/scss/main.scss';
@import '@fortawesome/fontawesome-free/css/all.css';
.page{
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
    // justify-content:space-around;
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
    display: flex;
    justify-content:center;
    align-items: center;
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
display: flex;
justify-content: center;
align-items: center;
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
    display: flex;
    flex:3;
    justify-content:center;
    align-items: center;
    background-color: red;
}
.pageIndex{
    display: flex;
    width: 0.25rem;
    height: 0.25rem;
    margin:0.025rem;
    color: black;
    background-color: rgb(255, 255, 255);
    justify-content: center;
    align-items: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>