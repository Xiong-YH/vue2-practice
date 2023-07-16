//引入mock模块
import Mock from 'mockjs'
//引入json数据
//webpack默认对外暴露的有json数据，图片
import banner from './banner.json'
import floor from './floor.json'

//mock数据：第一个是参数请求地址，第二个参数：请求数据
Mock.mock('/mock/banner',{code:200,data:banner})

Mock.mock('/mock/floor',{code:200,data:floor})