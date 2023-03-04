<template>
	<view>
		<view class="background">
			<image src="@/static/img/home/bgimg1.png" alt="">
			<image src="@/static/img/home/bgimg2.png" alt="" id="bgimg2">
			<view class="top-text">
				<image src="../../static/img/home/redflag.png" alt="" id="redflag">
					<view class="text">
						<image src="@/static/img/home/loveCPC.png" alt="" id="loveCPC">
						<image src="@/static/img/home/LOVE LEARNING HISTORY OF CPC.png" alt="" id="lovelearn">
					</view>
				
			</view>
		</view>
		<!-- 搜索框 -->
		<view class="content">
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
						<image :src="item.img" alt="">
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
@import "./home.scss";
</style>