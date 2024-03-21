import { ElMessage,ElMessageBox } from 'element-plus';
import tokenRequest from './tokenRequest';

//移除用户
const remove = async(a) => {
    let result = null;
    await ElMessageBox.confirm(
        '将会彻底删除此账号，要继续吗？',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(async() => {
            const removeitem = await tokenRequest.delete(`/admin/user/deleteUser/${a}`)
            if(removeitem.message === 'success'){
                ElMessage({
                  type: 'success',
                  message: '删除成功',
                          })
                result = true
            } else {
                ElMessage({
                  type: 'error',
                  message: '删除失败',
                          })
                result = false
            }
        }).catch((error) => {
            console.error('发生错误:', error);
            console.log('具体错误信息:', error.message); 
            ElMessage({
            type: 'info',
            message: '删除已取消',
          })
          result = false
        })
    return result
    }
//注册，增加用户
const addUsers = async(username=null,password=null,rolename=null,nickname='未设置',email='2031895172@qq.com') => {
   const addItem = await tokenRequest.post('/admin/user/addUser',{
        id:null,
        username,
        password,
        rolename,
        nickname,
        email,
    });
    console.log('添加用户结果为：',addItem);
    ElMessage({
        type:addItem.message,
        message:addItem.data
             })
    return addItem.message === 'error' ? false : true
    }
//增加角色
const addRole = async(roleName) => {
  
  try{
    const addrole= await tokenRequest.post('/admin/role/addRole',null,{
      params:{
        roleName,
      }
      
     });
     console.log('添加角色结果为：',addrole);
     ElMessage({
         type:addrole.message,
         message:addrole.data
              })
    return addrole.message === 'success' ? true : false
  }catch(error){
    console.log(roleName,typeof(roleName));
       console.log('添加角色报错',error);
  }
   
    }
const removeRole = async(id) => {
   try{
    let deleteRole = tokenRequest.delete(`/admin/role/deleteRole/${id}`)
   return deleteRole.message === 'success' ? false : true
   }catch(error){ 
    console.log('删除角色报错',error);
    return false   
   }
}
    export {remove , addUsers , removeRole , addRole}