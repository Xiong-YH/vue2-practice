import {reqGetSearchInfo} from '@/api'
//state:数据状态
const state = {
    searchList:{}
}

//mutation:修改数据唯一手段
const mutations = {
    GETSEARCHLIST(state,searchList) {
        state.searchList = searchList
    }
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
    //state是当前仓库的state
    goodsList(state) {
        return state.searchList.goodsList
    },
    trademarkList()
}

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}