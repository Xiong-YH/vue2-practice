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


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
————————————————
版权声明：本文为CSDN博主「suixinMLF」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_29252021/article/details/109615753