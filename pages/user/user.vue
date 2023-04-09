<template>
	<!-- index.wxml -->
	<view class="page">
		<image class="page-bg" src="https://bj.bcebos.com/szbwg/lovecp/img/user/static/bg.png"></image>
		<view class="content">
			<view class="page-head">
				<image class="head-logo" src="https://bj.bcebos.com/szbwg/lovecp/img/user/static/logo.png"></image>
				<image class="head-alphabet" src="https://bj.bcebos.com/szbwg/lovecp/img/user/static/alphabet.png">
				</image>
			</view>
			<view class="page-Heads" @click="changeAvatar()">
				<image :src="avatarUrl" v-if='avatarshow' style="border-radius: 50%;"></image>
			</view>
			<!-- 遮罩 -->
			<zero-loading v-if="loading" :mask='true'></zero-loading>
			<view class="info">
				<view class="info-one">
					<view class="info-name">
						<text class="name">{{ userinfo.name }}</text>
					</view>
				</view>
				<image class="Segmentation" src="https://bj.bcebos.com/szbwg/lovecp/img/user/static/Segmentation.png">
				</image>
				<view class="info-list">
					<view v-for="(item, index) in userinfo.list" :key="index">
						<image src="https://bj.bcebos.com/szbwg/lovecp/img/user/static/box.png"></image>
						<view class="info">
							<view class="number">{{ item.number }}</view>

							<view class="title">{{ item.title }}</view>
						</view>

					</view>
				</view>
				<JCalendar :yearMonth="targetDate" :dataSource="signData" @dateChange="refeshSignData($event)"
					@clickChange="updateSign($event)">
				</JCalendar>
				<!-- 消息提示 -->
				<u-toast ref="uToast"></u-toast>

				<view class="btn-info">
					<view class="btn" @click="logOut()">退出登录</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入日历组件
	import JCalendar from '@/components/calendar/j-calendar.vue'
	const app = getApp();
	export default {
		components: {
			JCalendar
		},
		data() {
			return {
				targetDate: `${parseInt(new Date().getFullYear())}-${parseInt(new Date().getMonth() + 1)}`,
				signData: [],
				avatarshow:true,
				loading: true,
				avatarUrl:'',
				collectnum: 0,
				userinfo: {
					heads: 'https://bj.bcebos.com/szbwg/lovecp/img/user/static/heads.png',
					name: '谢 彪 悍',
					StartTime: '2009-06-20',
					LengthTime: '11年11个月',
					list: [{
							title: '学习评分',
							number: '365'
						},
						{
							title: '我的浏览',
							number: '5188'
						},
						{
							title: '我的收藏',
							number: '0'
						},
					],
					Calendar: [{
							name: '壹',
							sj: 'Today',
							check: true
						},
						{
							name: '贰',
							sj: '3.25',
							check: false
						},
						{
							name: '叁',
							sj: '3.26',
							check: false
						},
						{
							name: '肆',
							sj: '3.27',
							check: false
						},
						{
							name: '伍',
							sj: '3.28',
							check: false
						},
						{
							name: '陆',
							sj: '3.29',
							check: false
						},
						{
							name: '柒',
							sj: '3.30',
							check: false
						}
					]
				}
			};
		},
		onLoad() {
			this.getCheckInStatus()
			this.getCollectNum()
			this.getViews()
			this.getScores()
			this.getUserInfo()
			// this.getAvatar()
		},
		onPullDownRefresh() {
			var that = this
			setTimeout(function() {
				that.getCheckInStatus()
				that.getCollectNum()
				that.getViews()
				that.getScores()
				that.getUserInfo()
				uni.stopPullDownRefresh();
			}, 1000);
		},
		mounted() {
			setTimeout(() => {
				this.loading = false
			}, 2000),
			this.avatarUrl=`http://43.140.204.55:5000/avatars/${uni.getStorageSync('token')}`

		},
		methods: {
			showTost(params) {
				this.$refs.uToast.show({
					...params
				})
			},
			// 上传头像
			changeAvatar() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
						const tempFilePaths = res.tempFilePaths
						uni.uploadFile({
							url: `http://43.140.204.55:5000/avatar/upload`,
							filePath: tempFilePaths[0],
							name: 'avatar',
							formData: {
								// 'key': 'avatar',
							},
							header: {
								'Authorization': `Bearer ${uni.getStorageSync('token')}`
							},
							success: (uploadRes) => {
								console.log(uploadRes.data)
								// 获取当前页面路径
								const currentPage = getCurrentPages()[0].route;
								
								// 关闭当前页面并重新打开
								uni.reLaunch({
								  url: `/${currentPage}`
								});

							}
						})
					}
				});
			},
			// // 获取头像
			// getAvatar(){
			// 	uni.request({
			// 		url: `http://43.140.204.55:5000/avatar/${uni.getStorageSync('token')}`,
			// 		// header: {
			// 		// 	'Authorization': `Bearer ${uni.getStorageSync('token')}`
			// 		// },
			// 		method: 'GET',
			// 		success: (res) => {
			// 			console.log(res.data);
			// 			// this.userinfo.heads=url;
			// 		},
			// 	})
			// },
			// 获取签到状态
			getCheckInStatus() {
				uni.request({
					url: `http://43.140.204.55:5000/check_in/statistics`,
					header: {
						'Authorization': `Bearer ${uni.getStorageSync('token')}`
					},
					method: 'GET',
					success: (res) => {
						this.signData = res.data.check_in_date
					},
				})
			},
			// 获取学习分数
			getScores() {
				uni.request({
					url: `http://43.140.204.55:5000/score`,
					header: {
						'Authorization': `Bearer ${uni.getStorageSync('token')}`
					},
					method: 'GET',
					success: (res) => {
						console.log(res)
						this.userinfo.list[0].number = res.data.score
						// this.userinfo.list[2].number=res.data.pageviews
					},
				})
			},
			// 获取用户信息
			getUserInfo() {
				uni.request({
					url: `http://43.140.204.55:5000/me`,
					header: {
						'Authorization': `Bearer ${uni.getStorageSync('token')}`
					},
					method: 'GET',
					success: (res) => {
						this.userinfo.name = res.data.user.username
					},
				})
			},
			// 获取浏览量
			getViews() {
				uni.request({
					url: `http://43.140.204.55:5000/pageviews`,
					header: {
						'Authorization': `Bearer ${uni.getStorageSync('token')}`
					},
					method: 'GET',
					success: (res) => {
						this.userinfo.list[1].number = res.data.pageviews
					},
				})
			},
			// 获取收藏数量
			getCollectNum() {
				uni.request({
					url: `http://43.140.204.55:5000/my_collection`,
					header: {
						'Authorization': `Bearer ${uni.getStorageSync('token')}`
					},
					method: 'GET',
					success: (res) => {
						console.log(res);
						res.data.collections = Array.from(new Set(res.data.collections))
						this.userinfo.list[2].number = res.data.collections.length
					},
				})
			},
			// 签到
			updateSign(obj) {
				var that = this
				uni.request({
					url: `http://43.140.204.55:5000/check_in`,
					header: {
						'Authorization': `Bearer ${uni.getStorageSync('token')}`
					},
					method: 'GET',
					success: (res) => {
						this.getCheckInStatus()
						if (res.data.status == 'success') {
							that.showTost({
								'message': '签到成功!',
								'duration': 2000, // 加载1s
								'position': 'bottom',
								'type': 'success',
								complete() {

								}
							})
						} else if (res.data.status == 'fail' && res.data.error == 'already checked in') {
							that.showTost({
								'message': '请勿重复签到!',
								'duration': 2000, // 加载1s
								'position': 'bottom',
								'type': 'false',
								complete() {

								}
							})
						} else {
							that.showTost({
								'message': '状态错误!',
								'duration': 2000, // 加载1s
								'position': 'bottom',
								'type': 'false',
								complete() {

								}
							})
						}
					}
				})
			},
			// 更新日历月份
			refeshSignData(obj) {
				this.getCheckInStatus()
			},
			// 退出登录
			logOut() {
				uni.removeStorageSync('id');
				uni.removeStorageSync('password');
				var that = this
				uni.removeStorage({
					key: 'token',
					success: function(res) {
						// console.log('success');
						uni.reLaunch({
							url: "/pages/login/index"
						})
						// that.$Router.push({
						// 	path: "/pages/login/index"
						// })
					}
				});
			}
		}
	};
</script>
<style>
	@import './index.css';
</style>