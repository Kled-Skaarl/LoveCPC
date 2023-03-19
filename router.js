// router.js
import {
	RouterMount,
	createRouter
} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	keepUniOriginNav: false,
	routes: [...ROUTES, {
		path: '/',
		redirect: '/pages/login/register'
	}]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	if (to.name == 'home' || to.name == 'video' || to.name == 'materials' || to.name == 'videoPlay' || to
		.name == 'videoDetail' || to.name == 'user' || to.name=='list') {
		next({
			name: 'index',
			NAVTYPE: 'push'
		});
	} else {
		next()
	}

});
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log('跳转结束')
})

export {
	router,
	RouterMount
}
