<template>
	<view>
		<view class="background">
			<image src="https://bj.bcebos.com/szbwg/lovecp/img/home/bgimg1.png" alt="">
				<image src="https://bj.bcebos.com/szbwg/lovecp/img/home/bgimg2.png" alt="" id="bgimg2">
					<view class="top-text">
						<image src="https://bj.bcebos.com/szbwg/lovecp/img/home/redflag.png" alt="" id="redflag">
							<view class="text">
								<image src="https://bj.bcebos.com/szbwg/lovecp/img/home/loveCPC.png" alt="" id="loveCPC">
									<image src="https://bj.bcebos.com/szbwg/lovecp/img/home/sss.png" alt="" id="lovelearn">
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
				<view class="detailItem" v-for="(item,index) in hotpotData.slice(0,3)">
					<view class="left" @click="handletoVideoPlay(item.title)">
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
				allData: [], //从后端获取的所有数据
				videoData: [], //存储视频数据
				// 轮播图片url
				swapList: [
					'https://bj.bcebos.com/szbwg/lovecp/img/banner/swap1.png',
					'https://bj.bcebos.com/szbwg/lovecp/img/banner/swap2.png',
					'https://bj.bcebos.com/szbwg/lovecp/img/banner/swap3.png',
					// '../../static/img/home/swap.png',
					// '../../static/img/home/swap.png'
				],
				// 学习链接data
				linkData: [{
						img: 'https://bj.bcebos.com/szbwg/lovecp/img/home/www.12371.cn.png',
						title: '共产党员网',
						link: 'https://www.12371.cn/'
					},
					{
						img: 'https://bj.bcebos.com/szbwg/lovecp/img/home/www.people.com.cn.png',
						title: '人民网',
						link: 'http://www.people.com.cn/'
					},
					{
						img: 'https://bj.bcebos.com/szbwg/lovecp/img/home/cpc.people.com.cn.png',
						title: '中国共产党新闻网',
						link: 'http://cpc.people.com.cn/'
					},
					{
						img: 'https://bj.bcebos.com/szbwg/lovecp/img/home/www.xuexi.cn.png',
						title: '学习强国网',
						link: 'https://www.xuexi.cn/'
					}
				],
				//热点推荐
				hotpotData: [],
				//时事要闻
				currentaffairsData: [],
			}
		},
		onLoad() {
			// 获取视频数据
			uni.request({
				url:`https://bj.bcebos.com/szbwg/lovecp/video.json`,
				method:'GET',
				success:(res)=>{
					this.videoData=res.data.slice(0,100)
					for (let i in this.videoData) {
						var tempvideoData = {
							img: '',
							title: '',
							source: '',
							id: ''
						}
						tempvideoData.img = this.videoData[i].cover
						tempvideoData.title = this.videoData[i].title
						tempvideoData.source = this.videoData[i].from
						tempvideoData.id = this.videoData[i].id
						this.hotpotData.push(tempvideoData)
					}
				}
			})
			console.log(this.videoData);

			// 请求所有数据
			this.$get('/posts').then(res => {

				// this.allData = TagsNameHelper(res.data);
				// console.log(this.allData);
				for (var i = 0; i < this.allData.length; i++) {
					var tempcurrentaffairsData = {
						title: '',
						source: '',
						id: ''
					}
					tempcurrentaffairsData.title = this.allData[i].Title
					tempcurrentaffairsData.source=this.allData[i].from
					tempcurrentaffairsData.id = parseInt(this.allData[i].ID)
					this.currentaffairsData.push(tempcurrentaffairsData)
				}
				this.currentaffairsData=this.currentaffairsData.slice(3,6)
				console.log(this.currentaffairsData);
			})



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
			handletoMaterialsPage() {
				uni.switchTab({
					url: '../materials/materials'
				})
			},
			//点击视频跳转到对应视频播放页
			handletoVideoPlay(key){
				// console.log(id);
				uni.navigateTo({
					url: '../video/videoPlay?title='+key
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "./home.scss";
</style>
