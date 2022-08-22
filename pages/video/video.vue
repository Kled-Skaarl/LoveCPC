<template>
	<view>
		<view class="background">
			<img src="@/static/img/video/bgimg1.png" alt="">
			<!-- <img src="@/static/img/video/bgimg2.png" alt=""> -->
		</view>
		<view class="content">
			<view class="top-img1">
				<img src="@/static/img/home/redflag.png" alt="">
			</view>
			<view class="top-img2">
				<img src="@/static/img/video/topimg1.png" alt="">
				<img src="@/static/img/video/GLORIOUS JOURNEY OF CPC.png" alt="">
			</view>
			<view class="search">
				<search></search>
			</view>
		</view>


		<!-- 分类标签 -->
		<view class="Classification">
			<view class="head">
				<text>分类标签</text>
			</view>
			<view class="line">
			</view>
			<view class="content">
				<view class="icon" v-for="(item,index) in iconList.slice(0,4)" @click="handleClassify(item.id)">
					<view class="itemicon">
						<i :class="item.icon"></i>
					</view>
					<text>{{item.title}}</text>
				</view>
			</view>
			<view class="content">
				<view class="icon" v-for="(item,index) in iconList.slice(4,8)" @click="handleClassify(item.id)">
					<view class="itemicon">
						<i :class="item.icon"></i>
					</view>
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		<!-- 视频列表 -->
		<view class="videoList">
			<view class="head">
				<i class="iconfont icon-shoucang"></i>
				<text class="text1">最新活动-视频</text>
				<text class="text2">不忘初心 牢记使命</text>
			</view>
			<view class="body">
				<view class="videoItem" v-for="(item,index) in sliceVideoList[currentpage-1].slice(0,2)"
					@click="handletoVideoPlay(item.videoID)">
					<img :src="item.img" alt="">
					<view class="littleTitle">
						<text>{{item.title}}</text>
						<i class="iconfont icon-bofang"></i>
					</view>
				</view>
			</view>
			<view class="body">
				<view class="videoItem" v-for="(item,index) in sliceVideoList[currentpage-1].slice(2,4)"
					@click="handletoVideoPlay(item.videoID)">
					<img :src="item.img" alt="">
					<view class="littleTitle">
						<text>{{item.title}}</text>
						<i class="iconfont icon-bofang"></i>
					</view>

				</view>
			</view>
			<!-- 分页功能 -->
			<view class="bottom">
				<uni-pagination :show-icon="true" :total="videoList.length" :current="currentpage" pageSize=4
					@change="handleChangePage" />
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				currentpage: 1,
				iconList: [{
						icon: 'iconfont icon-voice',
						title: '讲话',
						id: 1
					},
					{
						icon: 'iconfont icon-jingjizibenjiliang',
						title: '经济',
						id: 2
					},
					{
						icon: 'iconfont icon-wenhua',
						title: '文化',
						id: 3
					},
					{
						icon: 'iconfont icon-jungongzhang',
						title: '军事',
						id: 4
					},
					{
						icon: 'iconfont icon-gongjianshengtaiquan',
						title: '生态',
						id: 5
					},
					{
						icon: 'iconfont icon-weibiaoti-',
						title: '出访',
						id: 6
					},
					{
						icon: 'iconfont icon-dangjian_dangjianhuodongshiguanli',
						title: '会议',
						id: 7
					},
					{
						icon: 'iconfont icon-huodongxiangqu',
						title: '活动',
						id: 8
					},
				],
				videoList: [{
						img: '../../static/img/video/activity1.png',
						title: '习近平：携手迎接挑战，合作开创未来————在博鳌亚洲论坛发表演讲',
						videoID: 1
					},
					{
						img: '../../static/img/video/activity2.png',
						title: '北京冬奥会冬残奥会总结表彰大会在京举行',
						videoID: 2
					},
					{
						img: '../../static/img/video/activity1.png',
						title: '习近平：携手迎接挑战，合作开创未来————在博鳌亚洲论坛发表演讲',
						videoID: 3
					},
					{
						img: '../../static/img/video/activity2.png',
						title: '北京冬奥会冬残奥会总结表彰大会在京举行',
						videoID: 4
					},
					{
						img: '../../static/img/video/activity1.png',
						title: '习近平：携手迎接挑战，合作开创未来————在博鳌亚洲论坛发表演讲',
						videoID: 5
					},
					{
						img: '../../static/img/video/activity2.png',
						title: '北京冬奥会冬残奥会总结表彰大会在京举行',
						videoID: 6
					},
					{
						img: '../../static/img/video/activity1.png',
						title: '习近平：携手迎接挑战，合作开创未来————在博鳌亚洲论坛发表演讲',
						videoID: 7
					},
					{
						img: '../../static/img/video/activity2.png',
						title: '北京冬奥会冬残奥会总结表彰大会在京举行',
						videoID: 8
					},
					{
						img: '../../static/img/video/activity1.png',
						title: '习近平：携手迎接挑战，合作开创未来————在博鳌亚洲论坛发表演讲',
						videoID: 9
					},
					{
						img: '../../static/img/video/activity2.png',
						title: '北京冬奥会冬残奥会总结表彰大会在京举行',
						videoID: 10
					},
					{
						img: '../../static/img/video/activity1.png',
						title: '习近平：携手迎接挑战，合作开创未来————在博鳌亚洲论坛发表演讲',
						videoID: 11
					},
					{
						img: '../../static/img/video/activity2.png',
						title: '北京冬奥会冬残奥会总结表彰大会在京举行',
						videoID: 12
					},
					{
						img: '../../static/img/video/activity1.png',
						title: '习近平：携手迎接挑战，合作开创未来————在博鳌亚洲论坛发表演讲',
						videoID: 13
					},
					{
						img: '../../static/img/video/activity2.png',
						title: '北京冬奥会冬残奥会总结表彰大会在京举行',
						videoID: 14
					},
				]
			}
		},
		onLoad() {

		},
		computed: {
			sliceVideoList() {
				if (this.videoList != undefined) {
					let index = 0;
					let arrTemp = [];
					for (let i = 0; i < this.videoList.length; i++) {
						index = parseInt(i / 4);
						if (arrTemp.length <= index) {
							arrTemp.push([]);
						}
						arrTemp[index].push(this.videoList[i])
					}
					return arrTemp

				}
			}
		},
		methods: {
			//跳转至对应标签下视频
			handleClassify(id) {
				console.log(id);
			},
			//分页功能
			handleChangePage(e) {
				// console.log(e);
				this.currentpage = e.current
				// console.log(this.currentpage);
				// console.log(this.sliceVideoList);
			},
			//跳转至视频播放页
			handletoVideoPlay(id) {
				// console.log(id);
				uni.navigateTo({
					url:'./videoPlay?id='+id
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
			bottom: 10upx;
			z-index: 2;
		}
	}

	.videoList {
		width: 95%;
		// height: 650upx;
		height: 900upx;
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

		;

		.body {
			height: 35%;
			width: 100%;
			// align-items: center;
			text-align: center;
			margin: 20upx auto;
			display: flex;
			justify-content: space-between;

			.videoItem {
				// border-style: solid;
				// border-width: 5upx;
				// background-color: #C70007;
				height: auto;
				width: 50%;
				display: flex;
				text-align: center;
				flex-direction: column;

				// align-items: center;
				img {
					width: 95%;
					height: 60%;
					margin: 10upx auto;
				}

				.littleTitle {
					display: flex;
					text {
						margin: 10upx 0;
						font-size: 20upx;
						font-weight: 600;
					}
					.iconfont{
						color: #C70007;
						font-size: 36upx;
						margin-right: 10upx;
					}
				}


			}
		}

	}

	.Classification {
		width: 95%;
		height: 450upx;
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

		.line {
			width: 90%;
			height: 1upx;
			border-top: solid #C70007 5upx;
			margin: 20upx auto;
		}

		.content {
			display: flex;
			justify-content: space-around;
			// align-items: center;
			flex-direction: row;
			text-align: center;
			width: 100%;
			height: 40%;
			margin-bottom: -40upx;

			.icon {
				width: 16%;
				height: 120upx;
				margin: 10upx 10upx 20upx 20upx;
				background-color: #FCE5DB;
				display: flex;
				flex-direction: column;
				align-items: center;
				border-radius: 50upx;
				box-shadow: 2upx 2upx 2upx #C70007;

				.itemicon {
					margin-top: 20upx;

					.iconfont {
						font-size: 50upx;
						color: #C70007
					}
				}

				text {
					font-size: 30upx;
					font-weight: 600;
				}
			}
		}
	}
</style>
