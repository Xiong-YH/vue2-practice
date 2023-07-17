//引入API接口
import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'



//state:数据状态
const state = {
    //服务器返回值是啥就是啥
    categoryList : [],
    bannerList:[],
    floorList:[],
}

//mutation:修改数据唯一手段
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },

    GETBANNERLIST(state,bannerList) {
        state.bannerList = bannerList
    },

    GETFLOORLIST() {
        state.
    }
}

//action:书写业务逻辑，也可处理异步
const actions = {
    async CategoryList({commit}){
        let result = await reqCategoryList()
        if(result.code == 200) {
            commit('CATEGORYLIST',result.data)
        }
    },

    //获取banner轮播图数据
    async getBannerList({commit}) {
        let result =   await reqGetBannerList()
        if(result.code == 200) {
            commit('GETBANNERLIST',result.data)
        }
    },

    async getFloorList({commit}) {
        let result = await reqFloorList()
        if(result.code == 200) {
            commit('GETFLOORLIST',result.data)
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