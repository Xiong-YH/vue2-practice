//配置路由
import Vue from "vue";
import VueRouter from "vue-router";

//配置插件
Vue.use(VueRouter)

//引入路由组件
import Home from "@/views/Home/Home.vue"
import Login from "@/views/Login/l.vue"
//配置路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
]
})