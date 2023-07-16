//接口统一管理
import requests from "./request";
import mockrq

export const reqCategoryList = ()=>{
    return requests({url:'/product/getBaseCategoryList',method:'GET'})
}