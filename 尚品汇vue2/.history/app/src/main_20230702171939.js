import Vue from 'vue'
import App from './App.vue'

//引入全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
//引入路由
import router from "@/router/router"


Vue.config.productionTip = false

//测试
import{reqCategoryList} from "@/"

new Vue({
  render: h => h(App),
  //注册路由
  //注册路由信息：书写router时，组件都具有$rouer,$route属性
  router
}).$mount('#app')
