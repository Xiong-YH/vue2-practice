import Vue from 'vue'
import App from './App.vue'

//引入全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
//引入路由
import router from "@/router/router"
//引入vuex
import store from "@/store"
//引入mock
import "@/mock/mockServer.js"
//引入swiper样式
import ''


Vue.config.productionTip = false

//测试
// import{reqCategoryList} from "@/api"
// reqCategoryList()
new Vue({
  render: h => h(App),
  //注册路由
  //注册路由信息：书写router时，组件都具有$router,$route属性
  router,
  //注册仓库，组件会多出$store属性
  store
}).$mount('#app')
