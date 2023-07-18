//接口统一管理
import requests from "./request";
import mockrequests from './mockAjax'

export const reqCategoryList = ()=>{
    return requests({url:'/product/getBaseCategoryList',method:'GET'})
}

//获取banner接口
export const reqGetBannerList = ()=>mockrequests.get('/banner')

//获取floor数据
export const reqFloorList = ()=>mockrequests.get('/floor')

//获取搜索数据,请求方式为post，需要带参数
// export const reqGetSearchInfo = (params)=>requests.post('/list',params)
export const reqGetSearchInfo = (params)=>requests({url})