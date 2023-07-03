//配置路由
import Vue from "vue";
import VueRouter from "vue-router";

//配置插件
Vue.use(VueRouter)

//引入路由组件
import Home from "@/views/Home/Home.vue"
import Login from "@/views/Login/Login.vue"
import Register from "@/views/Register"
import Search from "@/views/Search"
//配置路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/home',
            component:Home
        },
]
})