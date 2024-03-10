import { ElMessage } from 'element-plus';
import tokenRequest from './tokenRequest'
const remove = async(a) => {
    ElMessageBox.confirm(
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
            console.log(removeitem);
            if(removeitem.message === 'success'){
                users.splice(getIndex(a),1)
                ElMessage({
                  type: 'success',
                  message: '删除成功',
                          })
                
            } else {
                ElMessage({
                  type: 'error',
                  message: '删除失败',
                          })
                linkto(pageNumber.value)
            }
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '删除已取消',
          })
        })
    }
const addUsers = async(username,password,rolename,nickname) => {
   const addItem = await tokenRequest.post('/admin/user/addUser',{
        id:null,
        username,
        password,
        rolename,
        nickname
    });
    console.log('添加用户结果为：',addItem);
    ElMessage({
        type:addItem.message,
        message:addItem.data
             })
    return addItem.message === 'error' ? false : true
    }
    export {remove , addUsers}