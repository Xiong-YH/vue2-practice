//引入API接口
import {reqCategoryList} from '@/api'



//state:数据状态
const state = {}

//mutation:修改数据唯一手段
const mutations = {
    CATEGORYLIST() )
    
}

//action:书写业务逻辑，也可处理异步
const actions = {
    async CategoryList({commit}){
        let result = await reqCategoryList()
        if(result.code == 200) {
            commit('CATEGORYLIST',result.data)
        }
    }
}

//getter：计算属性，简化仓库数据，让组件获取仓库数据更方便
const getters = {}

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}