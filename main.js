import Vue from 'vue'
import App from './App'
import {router,RouterMount} from '@/router.js'  //路径换成自己的
// console.log(router);
Vue.use(router)

App.mpType = 'app'
const app = new Vue({
    ...App
})

//挂载全局异步请求方法
import * as request from '@/utils/request.js'
for(let key in request){
	Vue.prototype[key]=request[key]
}
import search from "@/components/search/search.vue"
Vue.component('search',search)
import uView from "uview-ui";
Vue.use(uView);

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif