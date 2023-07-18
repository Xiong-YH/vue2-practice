import {reqGetSearchInfo} from '@/api'
//state:数据状态
const state = {}

//mutation:修改数据唯一手段
const mutations = {

}

//action:书写业务逻辑，也可处理异步
const actions = {
    //获取Search模块
    async getSearchList({commit},params={}) {
        let result =  await reqGetSearchInfo(params)
        if(result.code == 200) {
            commit("GETSEARCHLIST",result.data)
        }
    }
}

//getter：计算属性，简化仓库数据，让组件获取仓库数据更方便
const getters = {

}

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}