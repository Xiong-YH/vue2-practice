//接口统一管理
import requests from "./request";
import mockrequests from './mockAjax'

export const reqCategoryList = ()=>{
    return requests({url:'/product/getBaseCategoryList',method:'GET'})
}

//获取banner接口
export const reqGetBannerList = ()=>mockrequests.get('/banner')