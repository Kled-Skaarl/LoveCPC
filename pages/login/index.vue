<template>
	<view id="app" class="box">
		<!-- 背景图 -->
		<view class="backGroundImg">
			<image src="../../static/img/login/images/bj.jpg" mode=""></image>
			<image src="../../static/img/login/images/loveCPC.png" mode="" class='loveCPC'></image>
		</view>
		<!-- 登录卡片 -->
		<view class="card">
			<image src="../../static/img/login/images/bot3.png" mode="" id="logo"></image>
			<view class="form">
				<view class="input-id">
					<p style="display: inline-block;">账号：</p>
					<input v-model="userid" placeholder="请输入账号">
				</view>
				<view class="input-pw">
					<p style="float: left;">密码：</p>
					<input v-model="password" placeholder="请输入密码" type="password">
				</view>
			</view>
			<view class="btn">
				<button class="btn-item" style="background-color: #F50100;" @click="logIn()">登录</button>
				<button class="btn-item" style="background-color: #FAE092;" @click="getToRegister()">注册</button>
			</view>
		</view>
		<!-- 消息提示 -->
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		router
	} from '../../router'
	export default {
		data() {
			name: 'login'
			return {
				userid: '',
				password: '',
			}
		},
		methods: {
			showTost(params) {
				this.$refs.uToast.show({
					...params
				})
			},
			logIn() {
				var that = this
				this.$get(`:5000/login/${this.userid}/${this.password}`).then((res) => {
					console.log(res);
					if (res.data.stauts == 'success') {
						uni.setStorageSync('id', this.userid)
						uni.setStorageSync('password', this.password)
						uni.setStorageSync('token', res.data.token)
						that.showTost({
							'message': '登录成功!',
							'duration': 1000, // 加载1s
							// 'loading': true,
							'position': 'bottom',
							'type': 'success',
							complete() {
								that.$Router.pushTab({
									path: "/pages/home/home"
								})
							}
						})
					} else if (res.data.error == 'password is wrong') {
						that.showTost({
							'message': '密码错误!',
							'duration': 1000, // 加载1s
							'position': 'bottom',
							'type': 'error',
							complete() {
								that.userid = ''
								that.password = ''
							}
						})
					} else {
						that.showTost({
							'message': '用户名不存在!',
							'duration': 1000, // 加载1s
							'position': 'bottom',
							'type': 'error',
							complete() {
								that.userid = ''
								that.password = ''
							}
						})
					}

				}).catch((err) => {
					console.log(err);
				})


			},
			getToRegister() {
				console.log(uni.getStorageSync('id'))
				this.$Router.push({
					path: "/pages/login/register"
				})
			}
		}
	}
</script>

<style lang="scss">
	.box {
		height: 100vh;
		width: 100%;
		margin: 0;
		padding: 0;
		background-color: indianred;
		position: relative;
		display: flex;
		justify-content: center;

		.backGroundImg {
			width: 100%;
			height: 100%;

			image {
				height: 100%;
				width: 100%;
			}

			.loveCPC {
				position: absolute;
				top: 2%;
				left: 2%;
				width: 60%;
				height: 150upx;
				z-index: 100;
			}

			// position: absolute;
		}

		.card {
			// background-color: white;
			width: 95%;
			height: 50%;
			position: absolute;
			background: rgba(255, 255, 255, .7);
			-webkit-backdrop-filter: blur(10upx);
			backdrop-filter: blur(10upx);
			top: 25%;
			border-radius: 30upx;
			text-align: center;
			display: flex;
			justify-content: center;


			#logo {
				width: 20%;
				height: 15%;
				display: inline-block;
				position: absolute;
				margin-top: -60upx;
			}

			.form {
				// position: absolute;
				width: 100%;
				// height: 80%;
				margin-top: 150upx;

				.input-id {
					display: flex;
					justify-content: space-between;
					padding-bottom: 20upx;
				}

				.input-pw {
					margin-top: 50upx;
					display: flex;
					justify-content: space-between;
					padding-bottom: 20upx;
				}

				p {
					margin-left: 50upx;
				}

				input {
					outline-style: none;
					border: 1px solid #ccc;
					border-radius: 5px;
					background-color: white;
					height: 70upx;
					width: 70%;
					margin-right: 40upx;
				}
			}

			.btn {
				position: absolute;
				width: 100%;
				height: 100upx;
				bottom: 100upx;
				display: flex;
				justify-content: space-between;

				.btn-item {
					height: 80%;
					width: 40%;
				}
			}
		}
	}
</style>
