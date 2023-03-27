<template>
	<view class="page">
		<view class="page-header">
			<h2>{{curData[0].topic}}专题</h2>
		</view>
		<view class="page-content">

			<u-list>
				<u-list-item v-for="(item,index) in curData" :key="item.log_ID" class="list-item">
					<navigator @tap.stop :url="'/subPages/material-detail/material-detail?id='+item.log_ID">
						<view class="title">{{item.log_Title}}</view>
						<view class="item-footer">
							<text
								class="news-from">{{item.from}}</text>|<text>{{item.editor}}|{{item.time}}</text><button
								class="btn"> 查看详情</button>
						</view>

					</navigator>
				</u-list-item>
			</u-list>
		</view>

	</view>
</template>

<script>
	// import {
	// 	tags
	// } from '../../static/json/zbp1_post_tag.js'
	import {
		TagsNameHelper
	} from '../../utils/TagsNameHelper.js'
	export default {
		// props: {
		// 	tagType: {
		// 		type: String | Number,
		// 		required: true
		// 	}
		// },
		data() {
			return {
				curData: [],
				tagType: 0
			}
		},
		onLoad(option) {
			this.tagType = option.tagType || 0
		},
		beforeMount() {
			uni.request({
				url: 'https://bj.bcebos.com/szbwg/lovecp/cs_new.js',
				
				success: (res) => {
					// console.log(res.data,'ssssssssss');
					// var a = eval('(' + JSON.parse(res.data) + ')')
					// console.log( a ,'ssssssssss');
					// this.cardList = TagsNameHelper(res.data)
						this.curData = TagsNameHelper(res.data)[this.tagType]
					
				},
				fail: (err) => {
					reject(res)
				}
			})
			// this.curData = TagsNameHelper(tags)[this.tagType]
			console.log(this.tagType, this.curData)

		}
	}
</script>

<style lang="scss" scoped>
	.page {
		background: url('@/static/img/materials/photoc.png');
		background-position: right;
		min-height: 100%;
	}

	.page-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		// position: relative;
		height: 280upx;
		width: 100%;
		background: url('@/static/img/materials/dome_light.png') top no-repeat;
		background-size: contain;

		h2 {
			color: yellow;
			font-size: 80upx;
			padding-top: 140upx;
		}
	}

	.page-content {
		box-sizing: border-box;
		width: 100%;
		padding: 20upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;



		.list-item {
			box-sizing: border-box;
			width: 100%;
			min-height: 180upx;
			border: 1px solid white;
			border-radius: 8upx;
			padding: 5px;
			margin-top: 40upx;
			color: white;
			background: url('@/static/img/materials/bg.png') left 46% no-repeat, linear-gradient(to bottom, white, transparent);
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			.news-from {
				color: lightgoldenrodyellow;
				margin: 0 10upx;
			}

			.btn {
				width: 180upx;
				font-size: 20upx;
			}

			.title {
				font-weight: bold;
				color: gray;
				height: 120upx;
			}

			.item-footer {
				font-size: 24upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
</style>
