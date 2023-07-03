import Vue from "vue";
import Vuex from "vuex";
//需要使用插件一次
Vue.use(Vuex)

//引入小仓库
 import home from './home'
 import search from "./search";



//state:数据状态
const state = {}

//mutation:修改数据唯一手段
const mutations = {}

//action:书写业务逻辑，也可处理异步
const actions = {}

//getter：计算属性，简化仓库数据，让组件获取仓库数据更方便
const getters = {}

//对外暴露store类的实例
export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getters
    
    //实现vuex模块式开发cun'cu
})