<template>
	<view>
		<view class="background">
			<img src="@/static/img/home/bgimg1.png" alt="">
			<img src="@/static/img/home/bgimg2.png" alt="">
		</view>
		<view class="content">
			<view class="top-img1">
				<img src="../../static/img/home/redflag.png" alt="">
			</view>
			<view class="top-img2">
				<img src="@/static/img/home/loveCPC.png" alt="">
				<img src="@/static/img/home/LOVE LEARNING HISTORY OF CPC.png" alt="">
			</view>
			<view class="search">
				<search></search>
			</view>
		</view>

		<!-- 首页轮播图 -->
		<view class="wiper">
			<u-swiper :list="swapList" indicator indicatorMode="line" circular height=200 bgColor="#ffffff"
				indicatorActiveColor="#F30200" indicatorInactiveColor="#F9D969" interval=2500 duration=600></u-swiper>
		</view>

		<!-- 热点推荐 -->
		<view class="hot-spot">
			<view class="head">
				<i class="iconfont icon-shoucang"></i>
				<text class="text1">热点推荐</text>
				<text class="text2">学习百年党史 传承红色精神</text>
			</view>
			<view class="detail">
				<view class="detailItem" v-for="(item,index) in hotpotData">
					<view class="left">
						<img :src="item.img" alt="">
					</view>
					<view class="right">
						<text class="text1">{{item.title}}</text>
						<view class="rright">
							<i class="iconfont icon-web"></i>
							<text class="text2">{{item.source}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="bottom" @click="handletoVideoPage">
				<text>了解更多</text>
			</view>
		</view>

		<!-- 时事要闻 -->
		<view class="hot-spot">
			<view class="head">
				<i class="iconfont icon-shoucang"></i>
				<text class="text1">时事要闻</text>
				<text class="text2">学而时习之 奋斗正青春</text>
			</view>
			<view class="body">
				<view class="bodyItem" v-for="(item,index) in currentaffairsData">
					<text class="text1">{{item.title}}</text>
					<view class="under">
						<i class="iconfont icon-web"></i>
						<text class="text2">{{item.source}}</text>
					</view>
					<!-- 底部横线 -->
					<view class="bottomLine">
					</view>
				</view>
			</view>
			<view class="bottom" @click="handletoMaterialsPage">
				<text>查阅全部</text>
			</view>
		</view>

		<!-- 学习链接 -->
		<view class="learning-link">
			<view class="head">
				<text>学习链接</text>
			</view>
			<view class="content">
				<view class="linkItem" v-for="(item,index) in linkData" @click="handleWebLink(item.link)">
					<view class="img">
						<img :src="item.img" alt="">
					</view>
					<text> {{item.title}}</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				// 轮播图片url
				swapList: [
					'../../static/img/home/swap.png',
					'../../static/img/home/swap.png',
					'../../static/img/home/swap.png'
				],
				// 学习链接data
				linkData: [{
						img: '../../static/img/home/www.12371.cn.png',
						title: '共产党员网',
						link: 'https://www.12371.cn/'
					},
					{
						img: '../../static/img/home/www.people.com.cn.png',
						title: '人民网',
						link: 'http://www.people.com.cn/'
					},
					{
						img: '../../static/img/home/cpc.people.com.cn.png',
						title: '中国共产党新闻网',
						link: 'http://cpc.people.com.cn/'
					},
					{
						img: '../../static/img/home/www.xuexi.cn.png',
						title: '学习强国网',
						link: 'https://www.xuexi.cn/'
					}
				],
				//热点推荐
				hotpotData: [{
						img: '../../static/img/home/hotpot1.png',
						title: '【奋斗新百年 启航新征程】共同践行伟大时代的历史跨越使命',
						source: '党史学习教育官网'
					},
					{
						img: '../../static/img/home/hotpot2.png',
						title: '从百年党史中汲取党史学科发展的智慧（构建中国特色哲学社会科学）',
						source: '中共党史网'
					},
					{
						img: '../../static/img/home/hotpot3.png',
						title: '学习党史：中共共产党人的必修课',
						source: '中国共产党新闻网'
					}
				],
				//时事要闻
				currentaffairsData: [{
						title: '【金句回响】《习近平关于总体国家安全观论述摘编》：重点维护领域国家安全',
						source: '新华网',
					},
					{
						title: '习近平在中国人民大学考察时强调：坚持党的领导传承红色基因扎根中国大地',
						source: '共产党员网',
					},
					{
						title: '看党史，必须抓主流和主线',
						source: '党史学习教育网',
					}
				],
			}
		},
		onLoad() {

		},
		methods: {
			//跳转至外部网站
			handleWebLink(url) {
				uni.navigateTo({
					url: './webpage?link=' + url
				})
			},
			//"了解更多"跳转至视频页
			handletoVideoPage() {
				uni.switchTab({
					url: '../video/video'
				})
			},
			//"查阅全部"跳转至资料页
			handletoMaterialsPage(){
				uni.switchTab({
					url:'../materials/materials'
				})
			},
		}
	}
</script>

<style lang="scss">
	.background {
		position: absolute;
		z-index: -3;
		margin-top: 0upx;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			margin-bottom: -100upx;
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 100%;

		.top-img1 {
			position: relative;
			z-index: -1;
			margin-top: 0
		}

		.top-img2 {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: absolute;
			margin-top: -50upx;
			z-index: 1;
		}

		.search {
			position: absolute;
			margin-top: 80upx;
			z-index: 2;
		}
	}

	.wiper {
		margin-top: 40upx;
		padding: 0 25upx;
		// height: 400upx;
	}

	.hot-spot {
		display: flex;
		// justify-content: space-between;
		text-align: center;

		width: 95%;
		height: 750upx;
		background-color: #FFFFFF;
		margin: 40upx auto;
		border-radius: 20upx;
		flex-direction: column;

		.head {
			height: 10%;
			display: flex;
			align-items: center;
			margin-top: 10upx;

			.iconfont {
				color: #E2000B;
				font-size: 40upx;
				margin-left: 20upx;
			}

			.text1 {
				font-size: 32upx;
				font-weight: 600;
				margin-left: 10upx;
			}

			.text2 {
				font-size: 28upx;
				margin-left: 20upx;
				color: #670F13;
			}
		}

		.detail {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 90%;

			.detailItem {
				height: 35%;
				width: 100%;
				display: flex;

				.left {
					margin-left: 20upx;
					height: 100%;
					width: 45%;

					img {
						height: 75%;
						width: 100%;
					}
				}

				.right {
					margin-left: 20upx;
					display: flex;
					flex-direction: column;
					width: 55%;
					text-align: left;

					// align-items: center;
					.text1 {
						font-size: 30upx;
					}

					.rright {
						display: flex;
						text-align: right;

						.text2 {

							margin-right: 10upx;
							margin-top: 30upx;
							font-size: 20upx;
							color: #E50012;
						}

						.iconfont {
							color: #E50012;
							margin-top: 30upx;
						}
					}

				}
			}
		}

		.bottom {
			text-align: right;
			margin: 0 40upx 10upx 0;
			text {
				color: #E50012;
				font-weight: 600;
				font-size: 30upx;
				// text-decoration:underline;
			}
		}

		.body {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 90%;

			.bodyItem {
				height: 35%;
				width: 100%;
				display: flex;
				flex-direction: column;

				.text1 {
					text-align: left;
					margin-left: 20upx;
				}

				.under {
					margin-top: 10upx;
					text-align: right;
					margin-right: 30upx;

					.text2 {
						color: #E50012;
						font-size: 22upx;
					}

					.iconfont {
						color: #E50012;
					}
				}

				.bottomLine {
					width: 90%;
					height: 2upx;
					background: linear-gradient(244deg,rgba(255,255,255,0) 0%,rgba(229,0,18, 1) 50%,rgba(255,255,255,0) 100%);
					margin-top: 20upx;
				}
			}
		}
	}

	.learning-link {
		width: 95%;
		height: 350upx;
		background-color: #FFFFFF;
		margin: 40upx auto;
		border-radius: 20upx;
		opacity: 0.8;

		.head {
			display: flex;
			text-align: center;
			width: 100%;
			height: 10%;

			text {
				margin: 20upx auto;
				font-size: 32upx;
				font-weight: 600;
			}
		}

		.content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			width: 100%;
			height: 80%;

			.linkItem {
				display: flex;
				flex-direction: column;
				text-align: center;
				width: 25%;
				height: 200upx;
				margin: 30upx 0 0 0;

				.img {
					// margin: 0 0 0 10upx;
					padding-left: 40upx;
					width: 90%;
					height: 60%;
					display: flex;
					align-items: center;
					text-align: center;

					img {
						width: 70%
					}
				}

				;

				text {
					font-size: 20upx;
					margin-top: 20upx;
					font-weight: 600;
				}
			}
		}
	}
</style>
