<template>
	<view class="main">
		<!-- 头部红旗和文字 -->
		<view class="top-text">
			<image src="../../static/img/home/redflag.png" alt="" class="redflag">
				<view class="text">
					<image src="@/static/img/video/topimg1.png" alt="" class="topimg1">
						<image src="@/static/img/video/GLORIOUS JOURNEY OF CPC.png" alt="" class="GJcpc">
				</view>

		</view>
		<!-- 遮罩 -->
		<zero-loading v-if="loading" :mask='true'></zero-loading>
		<!-- // 视频播放组件 -->
		<!-- #ifndef H5 -->
		<view class="videoPlay">
			<video class="video-wrap" :src="videoData.videoUrl" :controls="isControls" :show-center-play-btn="false"
				object-fit="contain" :poster="videoData.imageUrl" :custom-cache="false" show-mute-btn :muted="isMuted"
				@play="onStartPlay" @ended="handleEnded" @error="videoErrorCallback"
				@fullscreenchange="fullscreenchange"></video>

			<!-- 控制按钮 - 播放 -->
			<view v-if="!isPlaying" @tap="handlePlay"></view>
			<!-- 控制按钮 - 暂停 -->
			<view v-else @tap="handlePause"></view>

			<!-- 音量开关 - 取消静音 -->
			<view v-if="isMuted" @tap="setIsMuted(false)"></view>
			<!-- 音量开关 - 静音 -->
			<view v-else @tap="setIsMuted(true)"></view>

			<!-- 点击遮罩 -->
			<view class="mask" @click.stop="requestFullScreen"></view>
		</view>
		<!-- #endif -->



		<!-- #ifdef H5 -->
		<view class="videoPlay" style="height: 400upx;">
			<view id="dplayer"></view>
		</view>
		<!-- #endif -->






		<!-- 视频原文 -->
		<view class="article">
			<view class="head">
				<text class="txt">视频原文</text>
				<view style="position: absolute; top: 20upx; right: 20upx;" @click="handleIcon()">
					<u-icon name="star" color="#FF0D23" size="28" v-if="collectFlag==false"></u-icon>
					<u-icon name="star-fill" color="#FF0D23" size="28" v-if="collectFlag==true"></u-icon>
				</view>
				<view class="line">
				</view>
			</view>
			<!-- 消息提示 -->
			<u-toast ref="uToast"></u-toast>

			<view class="detail">
				<view class="top-title">
					<text>{{title}}</text>
				</view>
				<mp-html :content="htmlText" />
			</view>
		</view>

	</view>
</template>

<script>
	import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'
	// import jsonData from '@/static/json/video.json'
	// #ifdef H5
	import Dplayer from 'dplayer'
	import Hls from 'hls.js'
	// #endif

	export default {
		components: {
			mpHtml
		},
		data() {
			return {
				loading: true,
				dp: {},
				title: '',
				collectFlag: false,
				all_videoData: [],
				id: 0, //视频id
				// 正在播放
				isPlaying: false,
				// 静音
				isMuted: false,
				preload: 'metadata',
				// 控制条
				isControls: true,
				videoData: {
					videoUrl: ''
				},
				timer: null,
				count: 0,
				htmlText: "<p>■&nbsp;&nbsp;党中央举办这次专题研讨班，目的是深入研读和领会党的十九届六中全会决议，继续把党史总结、学习、教育、宣传引向深入，更好把握和运用党的百年奋斗历史经验，弘扬伟大建党精神，增加历史自信、增进团结统一、增强斗争精神，动员全党全国各族人民坚定信心、勇毅前行，为实现第二个百年奋斗目标而不懈努力。一个民族要走在时代前列，就一刻不能没有理论思维，一刻不能没有正确思想指引。中国共产党为什么能，中国特色社会主义为什么好，归根到底是因为马克思主义行。马克思主义之所以行，就在于党不断推进马克思主义中国化时代化并用以指导实践。党的百年奋斗历程告诉我们，党和人民事业能不能沿着正确方向前进，取决于我们能否准确认识和把握社会主要矛盾、确定中心任务。什么时候社会主要矛盾和中心任务判断准确，党和人民事业就顺利发展，否则党和人民事业就会遭受挫折。战略问题是一个政党、一个国家的根本性问题。战略上判断得准确，战略上谋划得科学，战略上赢得主动，党和人民事业就大有希望。一百年来，党总是能够在重大历史关头从战略上认识、分析、判断面临的重大历史课题，制定正确的政治战略策略，这是党战胜无数风险挑战、不断从胜利走向胜利的有力保证。在百年奋斗历程中，党领导人民取得一个又一个伟大成就、战胜一个又一个艰难险阻，历经千锤百炼仍朝气蓬勃，得到人民群众支持和拥护，原因就在于党敢于直面自身存在的问题，勇于自我革命，始终保持先进性和纯洁性，不断增强创造力、凝聚力、战斗力，永葆马克思主义政党本色。</p>"
			};
		},
		onLoad(obj) {
			console.log(obj.title);
			this.title = obj.title
			uni.request({
					url: `https://bj.bcebos.com/szbwg/lovecp/video.json`,
					method: 'GET',
					success: (res) => {
						this.all_videoData = res.data.slice(0, 100)
						//在视频数据中找到对应的视频
						for (var i = 0; i < this.all_videoData.length; i++) {
							if (this.all_videoData[i].title == this.title) {
								// console.log(this.all_videoData[i]);
								this.videoData.videoUrl = this.all_videoData[i].m3u8
								this.htmlText = this.all_videoData[i].text
								this.id = this.all_videoData[i].id
							}
						}
						uni.request({
							url: `http://43.140.204.55:5000/my_collection`,
							header: {
								'Authorization': `Bearer ${uni.getStorageSync('token')}`
							},
							method: 'GET',
							success: (res) => {
								let collectionList = Array.from(new Set(res.data.collections))
								if (collectionList.indexOf(String(this.id)) >= 0) {
									this.collectFlag = true
								}
								console.log(collectionList.indexOf(String(this.id)))
								// if()
							},
						})
					}
				}),
				this.timer = setInterval(() => {
					this.count++
					// console.log(`Count: ${this.count}`)
				}, 1000)

		},
		beforeDestroy() {
			clearInterval(this.timer)
			console.log(this.count)
			uni.request({
				url: `http://43.140.204.55:5000/online_time/add_seconds/${this.count}`,
				header: {
					'Authorization': `Bearer ${uni.getStorageSync('token')}`
				},
				method: 'GET',
				success: (res) => {
					console.log(res)
				},
			})
		},
		mounted() {
			// 在自定义组件下，第二个参数传入组件实例 this，以操作组件内 <video> 组件。
			this.videoContext = uni.createVideoContext("videoWrap", this);
			// #ifdef H5
			this.dp = new Dplayer({

				//播放器的一些参数
				container: document.getElementById('dplayer'),
				autoplay: false, //是否自动播放
				theme: '#FADFA3', //主题色
				loop: true, //视频是否循环播放
				lang: 'zh-cn',
				screenshot: false, //是否开启截图
				hotkey: true, //是否开启热键
				preload: 'metadata', //视频是否预加载
				volume: 0.7, //默认音量
				mutex: true, //阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
				video: {
					url: "https://cuc-cscs-party-oss-video.oss-cn-beijing.aliyuncs.com/e32b8/video_e32b8_mp4.m3u8", //视频地址
					// url: 'http://boliu.hbzcyc.com/474975DDEFA/474975DDEFA.m3u8', //视频地址
					type: 'hls',
					customType: {
						hls: function(video, player) {
							const hls = new Hls() //实例化Hls  用于解析m3u8
							hls.loadSource(video.src)
							hls.attachMedia(video)
						}
					},
				},
			});
			// #endif
			this.loading = false
		},
		methods: {
			showTost(params) {
				this.$refs.uToast.show({
					...params
				})
			},
			// 请求视频数据

			// 收藏功能
			handleIcon() {
				if (this.collectFlag == true) {
					return
				}
				this.collectFlag = true
				// 请求后端
				uni.request({
					url: `http://43.140.204.55:5000/collect/${this.id}`,
					header: {
						'Authorization': `Bearer ${uni.getStorageSync('token')}`
					},
					method: 'GET',
					success: (res) => {
						console.log(res)
						if (res.data.status == 'success') {
							// 收藏成功
							this.showTost({
								'message': '收藏成功!',
								'duration': 2000, // 加载1s
								'position': 'bottom',
								'type': 'success',
								complete() {}
							})
						}
					},
				})

			},
			// 播放视频
			handlePlay() {
				this.isPlaying = true;
				// 调用 play() 必须使用 uni.createVideoContext 创建 video
				this.videoContext.play();
			},

			// 暂停视频
			handlePause() {
				this.isPlaying = false;
				// 调用 pause() 必须使用 uni.createVideoContext 创建 video
				this.videoContext.pause();
			},

			// 设置静音
			setIsMuted(val) {
				this.isMuted = val;
				// 注意: 必须在组件写上 muted 属性
				this.videoContext.muted = val;
			},

			// 开始播放
			onStartPlay() {
				// console.log('开始播放');
			},

			// 播放结束
			handleEnded() {
				this.isPlaying = false;
			},

			// 播放错误
			videoErrorCallback(e) {
				uni.showToast({
					title: `视频播放错误信息:${e.target.errMsg}`,
					duration: 2000,
					icon: "none",
				});
			},

			// 全屏
			requestFullScreen() {
				this.videoContext.requestFullScreen();
			},

			// 全屏监听
			fullscreenchange(e) {
				if (e.detail.fullScreen) {
					// 全屏
					this.videoContext.play();
					this.isControls = true;
				} else {
					// 退出全屏
					// this.videoContext.pause();
					// this.isControls = false;
				}
			},
		}
	}
</script>

<style lang="scss">
	@import "./videoPlay.scss";
</style>