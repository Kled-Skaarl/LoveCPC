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
	</view>
</template>

<script>
import { router } from '../../router'
	export default {
		data() {
			name: 'login'
			return {
				userid: '',
				password: '',
			}
		},
		methods: {
			logIn(){
				// console.log(this.userid,this.password);
				// this.$get(`/login/${this.userid}/${this.password}`).then((res)=>{
				// 	console.log(res);
				// })
				uni.setStorageSync('id', this.userid)
				uni.setStorageSync('password',this.password)
				this.$Router.pushTab({path:"/pages/home/home"})
			},
			getToRegister() {
				console.log(uni.getStorageSync('id'))
				this.$Router.push({path:"/pages/login/register"})
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
			background-color: white;
			width: 85%;
			height: 50%;
			position: absolute;
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
				margin-top: 180upx;

				.input-id {
					display: flex;
					justify-content: space-between;
				}

				.input-pw {
					margin-top: 50upx;
					display: flex;
					justify-content: space-between;
				}

				p {
					margin-left: 50upx;
				}

				input {
					outline-style: none;
					border: 1px solid #ccc;
					border-radius: 3px;
					height: 50upx;
					width: 70%;
					margin-right: 40upx;
				}
			}

			.btn {
				position: absolute;
				width: 100%;
				height: 100upx;
				bottom: 250upx;
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
