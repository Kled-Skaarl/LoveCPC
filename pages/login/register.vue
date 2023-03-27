<template>
	<view id="app" class="box">
		<!-- 背景图 -->
		<view class="backGroundImg">
			<image src="https://bj.bcebos.com/szbwg/lovecp/img/login/images/bj.jpg" mode=""></image>
			<image src="https://bj.bcebos.com/szbwg/lovecp/img/login/images/loveCPC.png" mode="" class='loveCPC'></image>
		</view>
		<!-- 登录卡片 -->
		<view class="card">
			<image src="https://bj.bcebos.com/szbwg/lovecp/img/login/images/bot3.png" mode="" id="logo"></image>
			<view class="form">
				<view class="input-id">
					<p style="display: inline-block;">账号：</p>
					<input v-model="userid" placeholder="请输入账号">
				</view>
				<view class="input-pw">
					<p style="float: left;">密码：</p>
					<input v-model="password" placeholder="请输入密码" type="password">
				</view>
				<view class="input-pw">
					<p style="margin-left: 10upx;">确认密码：</p>
					<input v-model="repassword" placeholder="请重新输入密码" type="password">

				</view>
				<p style="color: red;" v-show="errtag">两次输入密码不一致！</p>
			</view>
			<view class="btn">
				<!-- 				<button class="btn-item" style="background-color: #F50100;" @click="logIn()">登录</button> -->
				<button class="btn-item" style="background-color: #FAE092;" @click="Register()">注册</button>
			</view>
		</view>
		<!-- 消息提示 -->
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			name: 'login'
			return {
				userid: '',
				password: '',
				repassword: '',
				errtag: false,
				flag: false
			}
		},
		watch: {
			repassword: {
				handler() {
					if (this.password == '') {
						return
					} else {
						this.errtag = true
					}
					// this.errtag=true
					if (this.repassword == this.password & this.password != '') {
						this.errtag = false
						this.flag = true
					}
					// console.log(this.errtag)
				},
				immediate: true,
				deep: true
			},
			password: {
				handler() {
					if (this.password == '') {
						this.errtag = false
					}
				}
			}
		},
		methods: {
			showTost(params) {
				this.$refs.uToast.show({
					...params
				})
			},
			Register() {
				if (this.flag == false) {
					this.showTost({
						'message': '请输入账号和密码!',
						'duration': 2000, // 加载1s
						'position': 'bottom',
						'type': 'error',
						complete() {}
					})
					return
				}
				let that = this
				this.$get(`:5000/register/${this.userid}/${this.password}`).then((res) => {
					if (res.data.status == "success") {
						// 注册成功
						that.showTost({
							'message': '注册成功!',
							'duration': 2000, // 加载1s
							'position': 'bottom',
							'type': 'success',
							complete() {
								console.log(111);
								that.$Router.push({
									path: "/pages/login/index"
								})
							}
						})
					} else if (res.data.error == "username is exist") {
						// console.log(res.data.error);
						that.showTost({
							'message': '该账号已存在!',
							'duration': 2000, // 加载1s
							'position': 'bottom',
							'type': 'error',
							complete() {
								that.userid = '',
									that.password = '',
									that.repassword = ''
							}
						})
					}
					console.log(res);
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

				// pointer-events: none;
				.btn-item {
					height: 80%;
					width: 40%;
				}
			}
		}
	}
</style>
