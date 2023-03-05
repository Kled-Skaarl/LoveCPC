<template>
	<view>
		<!-- //背景图 -->
		<!-- 		<view class="background">
			<image src="@/static/img/video/bgimg1.png" alt="">
		</view> -->
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
				<search></search>
			</view>
		</view>
		<!-- //视频列表 -->
		<view class="list">
			<view class="list_item" v-for="(item,index) in all_videoData" @click="handletoVideoPlay(item.title)">
				<view class="item_left">
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="item_right">
					<text class="itm_title">{{item.title}}</text>
					<view class="tag">
						<text class="itm_cat">{{item.cat}}</text>
					</view>

				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import jsonData from '@/static/json/video.json'
	export default {
		data() {
			return {
				all_videoData: [],
			}
		},
		onLoad() {
			this.all_videoData = jsonData
			console.log(this.all_videoData);
		},
		computed: {

		},
		methods: {
			//跳转至视频播放页
			handletoVideoPlay(itm){
				uni.navigateTo({
					url: './videoPlay?title=' + itm
				})
			}
		}
	}
</script>
<style lang="scss">
	@import "./videoDetail.scss"
</style>
