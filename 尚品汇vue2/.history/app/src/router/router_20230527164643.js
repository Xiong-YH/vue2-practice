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
            component:Home,
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:true}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:true}
        },
        {
            path:'/search',
            component:Search,
            meta:{show:true}
        },
        //路由重定向
        {
            path:'/',
            redirect:Home
        },
]
})