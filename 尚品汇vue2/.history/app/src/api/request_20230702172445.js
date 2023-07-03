//引入axios
import axios from "axios";

//利用axios对象方法create，创建一个axios实例

const requests = axios.create({
    //基础路径配置
    baseURL:"/api",
    //请求超过时间
    timeout:5000
});

//请求拦截器
requests.interceptors.request.use((config)=>{
    //config带有headers
    return config
});

//响应拦截器：两个回调函数
requests.interceptors.response.use((res)=>{
    //成功回调函数：服务器数据回返
    return res.data
},(error)=>{
    return Promise.reject(new Error('Faile'))
});

export default requests