<template>
	<view class="card" ref="card">
		<view class="header">
			<view class="title-wrap">
				<navigator :url="'/subPages/material-detail/material-detail?id='+obj.id">
					<text class="category">{{obj.category}}</text>
					<text class="title">{{obj.title}}</text>
				</navigator>
			</view>
			<view class="tools">
				<i class="iconfont icon-a-bijibenbiji"></i>
				<i class="iconfont" :class="obj.collected ? 'icon-shoucang2':'icon-shoucang3'"
					@tap="handleCollected"></i>
				<i class="iconfont icon-erweima"></i>
			</view>
		</view>
		<view class="article text-overflow" @tap="contentClick">
			<view class="item" v-for="(item,index) in obj.articleList" :key="index">
				<navigator class="title-wrap" @tap.stop
					:url="'/subPages/material-detail/material-detail?id='+item.article_id">
					<text class="title">{{item.title}}</text>
					<text class="sub-title">{{item.sub_title}}</text>
				</navigator>
				<view class="content">{{item.content}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "card",
		props: {
			obj: {
				type: Object,
				required: true
			}
		},
		data() {
			return {

			};
		},
		methods: {
			contentClick() {
				let el = this.$refs.card.$el;
				el.classList.toggle('card_bg');
			},
			handleCollected() {
				this.obj.collected = !this.obj.collected;
				if (this.obj.collected) {
					uni.showToast({
						title: '收藏成功'
					});
				} else {
					uni.showToast({
						title: '已取消收藏'
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card {
		width: 100%;
		overflow: hidden;
		background: url('@/static/img/materials/bg.png') left 46% no-repeat, linear-gradient(to bottom, white, transparent);
		border: 1px solid #fff;
		border-radius: 15upx;
		line-height: 1;

		&.card_bg {
			background: url('@/static/img/materials/bg.png') left 46% no-repeat, linear-gradient(to bottom, white, transparent 400upx);

			.text-overflow {
				display: block;
			}
		}

		.header {
			padding: 40upx 0;
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			position: relative;

			&::before {
				content: '';
				width: 6upx;
				height: 30upx;
				background-color: #e50010;
				position: absolute;
				left: 0;
				transform: translateY(20%);
			}

			.title-wrap {
				margin-left: 25upx;

				.category {
					font-size: 32upx;
					font-weight: 700;
				}

				.title {
					font-size: 28upx;
					color: #813a3d;
					margin-left: 15upx;
				}
			}

			.tools {
				margin-right: 25upx;
				display: flex;
				align-items: baseline;

				.iconfont {
					font-size: 28upx;
					margin-left: 15upx;
					color: #e50012;
				}

				.icon-erweima {
					&::before {
						display: inline-block;
						transform: scale(1.5);
					}
				}
			}
		}

		.article {
			margin-bottom: 30upx;
			color: #fff;
			font-size: 26upx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			overflow: hidden;
			text-overflow: ellipsis;
			.item{
				padding: 0 25upx;
				border-top: 4upx solid;
				border-image: linear-gradient(to left, transparent, #fff, transparent) 2 2 2 2;
			}
			.title-wrap {
				font-weight: 700;
				line-height: 1.5em;
				padding-top: 25upx;
				position: relative;

				.sub-title {
					margin-left: 15upx;
					padding-left: 15upx;
					position: relative;

					&::before {
						content: '';
						width: 4upx;
						height: 25upx;
						background-color: #fff;
						position: absolute;
						left: -3upx;
						top: 5upx;
					}
				}
			}

			.content {
				text-indent: 2em;
				line-height: 1.5em;
				margin-bottom: 25upx;
				padding-top: 25upx;
			}
		}
	}
</style>
