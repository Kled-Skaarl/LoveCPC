<template>
	<view>
		<view class="content">
			<view>
				<i class="iconfont icon-sousuo"></i>
			</view>
			<view class="inputare">
				<input v-model="searchdata" placeholder="看今朝辉煌·忆峥嵘岁月" />
			</view>
			<view class="search-butten" @click="get_search(searchdata)">
				搜索
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "search",
		props: ['all_videoData'],
		data() {
			return {
				searchdata: '',
				resArr: []
			}
		},
		watch: {},
		methods: {
			get_search(str) {
				this.resArr=[]
				for (var i = 0; i < this.all_videoData.length; i++) {
					if (this.all_videoData[i].title.indexOf(str) != -1) {
						this.resArr.push(this.all_videoData[i])
					}
				}
				this.$emit('getSearchRes',this.resArr)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		align-items: center;
		z-index: 1;
		// margin-right: 10upx;
		text-align: c;
		height: 60upx;
		justify-content: space-between;
		border-top: 4upx solid #ee6a02;
		border-left: 4upx solid #f69b2b;
		border-bottom: 4upx solid #ffc951;
		border-right: 4upx solid #f7c895;
		box-shadow: 3px 2px #ee6a02;
		border-radius: 30upx;
		padding: 2upx 30upx;
		width: 600upx;
		background-color: #ffffff;
	
	.iconfont {
			font-size: 40upx;
		}

		.inputare {
			// margin-left: 20upx;
		}

		.search-butten {
			height: 80%;
			background-color: #e50012;
			text-align: center;
			align-items: center;
			width: 120upx;
			border-radius: 30upx;
			color: #ffffff;
			// margin-left: 30upx;
		}
	}
</style>
