<template>
	<view>
		<view class="background">
			<image src="@/static/img/video/bgimg1.png" alt="">
		</view>
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
					url: './videoPlay?id=' + id
				})
			},
		}
	}
</script>

<style lang="scss">
@import "./video.scss"
</style>
