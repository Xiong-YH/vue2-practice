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
requests.in