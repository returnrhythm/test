// 获取路由,rou传入路由树，str传入期待找到的path值，会返回拥有该path值的根目录
const getRoute = (rou , str) => {
    let result
    console.log(rou.length);
    if (!rou || rou.length === 0) {
            // console.error("Invalid input array");
            return [];
    }
    for(let i = 0; i<rou.length; i++){
      if(rou[i].permissionName === str){
        return JSON.parse(JSON.stringify(rou))
      }else{
           result = rou[i].children != undefined ? getRoute(rou[i].children,str) : []
           if(result.length !== 0){
            break;
           }
      }
    }
    return result
}
export {getRoute}
