<template>
	<view>
		<view class="top-text">
			<image src="@/static/img/home/redflag.png" alt="" id="redflag">
				<view class="text">
					<image src="@/static/img/video/topimg1.png" alt="" id="topimg1">
						<image src="@/static/img/video/GLORIOUS JOURNEY OF CPC.png" alt="" id="GJcpc">
				</view>
		</view>

		<!-- 搜索框 -->
		<view class="block-search">
			<view class="search-item">
				<search :all_videoData='all_videoData' @getSearchRes="getSearchRes"></search>
			</view>
		</view>
		<!-- //视频列表 -->
		<view class="listBlock">
			<custom-waterfalls-flow :value="list" @wapperClick="wapperClick" @imageClick="imageClick">
				<!-- #ifdef MP-WEIXIN -->
				<view class="item" v-for="(item,index) in list" :key="index" slot="slot{{index}}"
					@click="handletoVideoPlay(item.title)">
					<view class="title">{{item.title}}</view>
					<view class="desc">{{item.desc}}</view>
				</view>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<template v-slot:default="item">
					<view class="item">
						<view class="title">{{item.title}}</view>
						<view class="desc">{{item.desc}}</view>
					</view>
				</template>
				<!-- #endif -->
			</custom-waterfalls-flow>
		</view>
	</view>
</template>
<script>
	// import jsonData from '@/static/json/video.json'

	export default {
		data() {
			return {
				jsonData:[],
				all_videoData: [],
				page_videoData: [],
				list: [],
				reachBottomIndex: 0,
				searchFlag: false,
			}
		},
		onLoad() {
			uni.request({
				url: `https://bj.bcebos.com/szbwg/lovecp/video.json`,
				method: 'GET',
				success: (res) => {
					this.list = []
					this.all_videoData = res.data
					this.jsonData=res.data
					this.page_videoData = this.all_videoData.slice(0, 10)
					for (var i = 0; i < this.page_videoData.length; i++) {
						var obj = {}
						obj.image = this.page_videoData[i].cover
						obj.title = this.page_videoData[i].title
						obj.desc = this.page_videoData[i].cat
						this.list.push(obj)
					}

				}
			})
		},
		computed: {},
		methods: {
			wapperClick(item) {
				console.log('单项点击事件', item)
				uni.navigateTo({
					url: './videoPlay?title=' + item.title
				})

			},
			imageClick(item) {
				console.log('图片点击事件', item)
				uni.navigateTo({
					url: './videoPlay?title=' + item.title
				})
			},

			// 接收搜索结果
			getSearchRes(res) {
				this.list = []
				console.log('111', res)
				console.log(this);
				this.list = res
				console.log('222', this.list)
				this.searchFlag = true
			}

		},
		onReachBottom() {
			if (this.searchFlag === false) {
				this.reachBottomIndex += 1
				this.page_videoData = this.jsonData.slice(this.reachBottomIndex * 10, (this.reachBottomIndex + 1) * 10)
				for (var i = 0; i < this.page_videoData.length; i++) {
					var obj = {}
					obj.image = this.page_videoData[i].cover
					obj.title = this.page_videoData[i].title
					obj.desc = this.page_videoData[i].cat
					this.list.push(obj)
				}
				console.log(this.list);
			}
			// 伪懒加载


		}
	}
</script>
<style lang="scss">
	@import "./videoDetail.scss"
</style>