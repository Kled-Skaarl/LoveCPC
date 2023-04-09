<template>
	<view class="page">
		<view class="page-header">
			<view class="top-img1">
				<image src="https://bj.bcebos.com/szbwg/lovecp/img/home/redflag.png" alt="" style="width: 100vw;height: 320rpx;">
			</view>
			<view class="top-img2">
				<image src="https://bj.bcebos.com/szbwg/lovecp/img/home/loveCPC.png" alt="" style="width: 328rpx; height: 148rpx;">
					<image src="https://bj.bcebos.com/szbwg/lovecp/img/home/sss.png" alt="" style="width: 444rpx; height: 48rpx;">
			</view>
			<view class="search">
				<search all_videoData="tags"></search>
			</view>
		</view>
		<!-- 遮罩 -->
		<zero-loading v-if="loading" :mask='true'></zero-loading>
		
		<view class="page-content">
			<view class="card-wrap" v-for="item in cardList" :key="item.log_ID">
				<card :obj="item"></card>
			</view>
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
		data() {
			return {
				loading:true,
				cardList: [{
						id: 1,
						category: '青年专题',
						title: '不负韶华 不负时代 不负人民',
						collected: false,
						articleList: [{
								article_id: 1,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 2,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 3,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 4,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							}
						]
					},
					{
						id: 2,
						category: '党史百科',
						title: '学习百年党史 笃定理想信念',
						collected: true,
						articleList: [{
								article_id: 5,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 6,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 7,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 8,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							}
						]
					},
					{
						id: 3,
						category: '红色展馆',
						title: '勇往直前走向胜利',
						collected: false,
						articleList: [{
								article_id: 9,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 10,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 11,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 12,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							}
						]
					},
					{
						id: 4,
						category: '百年影像',
						title: '百炼成钢 历久弥新',
						collected: true,
						articleList: [{
								article_id: 13,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 14,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 15,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							},
							{
								article_id: 16,
								title: '五四青年节',
								sub_title: '每一种奋斗的姿态，都是怒放的青春',
								content: '青春的力量，不是时光的力量，而是梦想的力量。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。只有把自己的小我融入祖国的大我、人民的大我之中，与时代同步伐、与人民共命运，才能更好实现人生价值、升华人生境界。'
							}
						]
					}
				]
			};
		},
		beforeMount() {
			uni.request({
				url: 'https://bj.bcebos.com/szbwg/lovecp/cs_new.js',
				
				success: (res) => {
					// console.log(res.data,'ssssssssss');
					// var a = eval('(' + JSON.parse(res.data) + ')')
					// console.log( a ,'ssssssssss');
					this.cardList = TagsNameHelper(res.data)
					
				},
				fail: (err) => {
					reject(res)
				}
			})
			// this.cardList = TagsNameHelper(tags);
			console.log(this.cardList)
		},
		mounted() {
			setTimeout(() => {
				this.loading = false
			}, 3000)
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
		position: relative;
		height: 100%;

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
			bottom: 10upx;
			z-index: 2;
		}
	}

	.page-content {
		padding: 0 25upx;

		.card-wrap {
			margin: 20upx 0 30upx;
		}
	}
</style>
