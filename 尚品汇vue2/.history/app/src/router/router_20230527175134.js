//配置路由
import Vue from "vue";
import VueRouter from "vue-router";

//配置插件
Vue.use(VueRouter)

//引入路由组件
import Home from "@/views/Home/Home.vue"
import Login from "@/views/Login/Login.vue"
import Register from "@/views/Register"
import Search from "@/views/Search/index.vue"
//配置路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        //字符串形式
        {
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true},
            name:"Search"
        },
        // {
        //     path:'/search',
        //     component:Search,
        //     meta:{show:true}
        // },
        //路由重定向
        {
            path:'/',
            redirect:Home
        },
]
})

// 重复点击失效问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
