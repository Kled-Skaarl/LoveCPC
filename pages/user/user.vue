<template>
    <!-- index.wxml -->
    <view class="page">
        <image class="page-bg" src="/static/static/bg.png"></image>
        <view class="content">
            <view class="page-head">
                <image class="head-more" src="/static/img/user/static/more.png"></image>
                <image class="head-logo" src="/static/img/user/static/logo.png"></image>
                <image class="head-alphabet" src="/static/img/user/static/alphabet.png"></image>
                <view class="favourite-box">
                    <image class="head-favourite" src="/static/img/user/static/favourite.png"></image>
                </view>
            </view>
            <view class="page-Heads">
                <image :src="userinfo.heads"></image>
            </view>
            <view class="info">
                <view class="info-one">
                    <view class="info-name">
                        <text class="fz-24">正式党员</text>
                        <text class="name">{{ userinfo.name }}</text>
                    </view>
                    <view class="info-sj">
                        <view>
                            <text class="sj">
                                {{ userinfo.StartTime }}
                                <text style="color: #eee">入党</text>
                            </text>
                        </view>
                        <view>
                            <text class="sj">
                                {{ userinfo.LengthTime }}
                                <text style="color: #eee">党龄</text>
                            </text>
                        </view>
                    </view>
                </view>
                <image class="Segmentation" src="/static/img/user/static/Segmentation.png"></image>
                <view class="info-tow">
                    <text class="fz-24">所属支部</text>
                    <text class="cont">中国传媒大学计算机与空间安全学院党委</text>
                </view>
                <view class="info-list">
                    <view v-for="(item, index) in userinfo.list" :key="index">
                        <image src="/static/img/user/static/box.png"></image>

                        <view class="number">{{ item.number }}</view>

                        <view class="title">{{ item.title }}</view>
                    </view>
                </view>
                <view class="Calendar">
                    <view>
                        <view class="line"></view>
                    </view>
                    <view class="circle-list">
                        <view v-for="(item, index) in userinfo.Calendar" :key="index">
                            <view :class="item.check == true ? 'circle-true' : 'circle'">{{ item.name }}</view>

                            <view class="title">{{ item.sj }}</view>
                        </view>
                    </view>
                </view>
                <view class="date">
                    <image src="/static/img/user/static/date.png"></image>
                </view>
                <view class="btn-info">
                    <view>
                        <text>累计签到：</text>
                        <text class="num">42</text>
                        <text>天</text>
                    </view>
                    <view class="btn">退出登录</view>
                    <view>
                        <text>当前积分：</text>
                        <text class="num">219.5</text>
                        <text>分</text>
                    </view>
                </view>
            </view>
        </view>
        <view>
            <image class="tabbar" src="/static/img/user/static/tabbar.png"></image>
        </view>
    </view>
</template>

<script>
// index.js
// 获取应用实例
const app = getApp();
export default {
    data() {
        return {
            userinfo: {
                heads: '/static/img/user/static/heads.png',
                name: '谢 彪 悍',
                StartTime: '2009-06-20',
                LengthTime: '11年11个月',
                list: [
                    {
                        title: '我的关注',
                        number: '365'
                    },
                    {
                        title: '我的粉丝',
                        number: '7'
                    },
                    {
                        title: '我的浏览',
                        number: '5188'
                    },
                    {
                        title: '我的收藏',
                        number: '100'
                    },
                    {
                        title: '我的心得',
                        number: '69'
                    }
                ],
                Calendar: [
                    {
                        name: '壹',
                        sj: 'Today',
                        check: true
                    },
                    {
                        name: '贰',
                        sj: '3.25',
                        check: false
                    },
                    {
                        name: '叁',
                        sj: '3.26',
                        check: false
                    },
                    {
                        name: '肆',
                        sj: '3.27',
                        check: false
                    },
                    {
                        name: '伍',
                        sj: '3.28',
                        check: false
                    },
                    {
                        name: '陆',
                        sj: '3.29',
                        check: false
                    },
                    {
                        name: '柒',
                        sj: '3.30',
                        check: false
                    }
                ]
            }
        };
    },
    onLoad() {},
    methods: {}
};
</script>
<style>
@import './index.css';
</style>
