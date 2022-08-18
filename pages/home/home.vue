<template>
	<view>
		<view class="background">
			<img src="@/static/img/home/炎黄天.png" alt="">
			<img src="@/static/img/home/火烧云.png" alt="">
		</view>
		<view class="content">
			<view class="top-img1">
				<img src="@/static/img/home/红旗飞扬.png" alt="">
			</view>
			<view class="top-img2">
				<img src="@/static/img/home/爱学党史.png" alt="">
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
		</view>

		<!-- 时事要闻 -->
		<view class="hot-spot">
			<view class="head">
				<i class="iconfont icon-shoucang"></i>
				<text class="text1">时事要闻</text>
				<text class="text2">学而时习之 奋斗正青春</text>
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
					'../../static/img/home/轮播图.png',
					'../../static/img/home/轮播图.png',
					'../../static/img/home/轮播图.png'
				],
				// 学习链接data
				linkData: [{
						img: '../../static/img/home/共产党员网.png',
						title: '共产党员网',
						link: 'https://www.12371.cn/'
					},
					{
						img: '../../static/img/home/人民网.png',
						title: '人民网',
						link: 'http://www.people.com.cn/'
					},
					{
						img: '../../static/img/home/共产党新闻.png',
						title: '中国共产党新闻网',
						link: 'http://cpc.people.com.cn/'
					},
					{
						img: '../../static/img/home/学习强国.png',
						title: '学习强国网',
						link: 'https://www.xuexi.cn/'
					}
				]
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
			}
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
		height: 650upx;
		background-color: #FFFFFF;
		margin: 40upx auto;
		border-radius: 20upx;

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
				};
				text {
					font-size: 20upx;
					margin-top: 20upx;
					font-weight: 600;
				}
			}
		}
	}
</style>
