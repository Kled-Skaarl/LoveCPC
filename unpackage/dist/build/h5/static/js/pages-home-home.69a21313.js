(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"0cc1":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={search:i("81cc").default,uSwiper:i("a9b3").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"background"},[n("img",{attrs:{src:i("3492"),alt:""}}),n("img",{attrs:{src:i("cc36"),alt:""}})]),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"top-img1"},[n("img",{attrs:{src:i("e98d"),alt:""}})]),n("v-uni-view",{staticClass:"top-img2"},[n("img",{attrs:{src:i("6e67"),alt:""}}),n("img",{attrs:{src:i("9f0d"),alt:""}})]),n("v-uni-view",{staticClass:"search"},[n("search")],1)],1),n("v-uni-view",{staticClass:"wiper"},[n("u-swiper",{attrs:{list:t.swapList,indicator:!0,indicatorMode:"line",circular:!0,height:"200",bgColor:"#ffffff",indicatorActiveColor:"#F30200",indicatorInactiveColor:"#F9D969",interval:"2500",duration:"600"}})],1),n("v-uni-view",{staticClass:"hot-spot"},[n("v-uni-view",{staticClass:"head"},[n("i",{staticClass:"iconfont icon-shoucang"}),n("v-uni-text",{staticClass:"text1"},[t._v("热点推荐")]),n("v-uni-text",{staticClass:"text2"},[t._v("学习百年党史 传承红色精神")])],1),n("v-uni-view",{staticClass:"detail"},t._l(t.hotpotData,(function(e,i){return n("v-uni-view",{staticClass:"detailItem"},[n("v-uni-view",{staticClass:"left"},[n("img",{attrs:{src:e.img,alt:""}})]),n("v-uni-view",{staticClass:"right"},[n("v-uni-text",{staticClass:"text1"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"rright"},[n("i",{staticClass:"iconfont icon-web"}),n("v-uni-text",{staticClass:"text2"},[t._v(t._s(e.source))])],1)],1)],1)})),1),n("v-uni-view",{staticClass:"bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handletoVideoPage.apply(void 0,arguments)}}},[n("v-uni-text",[t._v("了解更多")])],1)],1),n("v-uni-view",{staticClass:"hot-spot"},[n("v-uni-view",{staticClass:"head"},[n("i",{staticClass:"iconfont icon-shoucang"}),n("v-uni-text",{staticClass:"text1"},[t._v("时事要闻")]),n("v-uni-text",{staticClass:"text2"},[t._v("学而时习之 奋斗正青春")])],1),n("v-uni-view",{staticClass:"body"},t._l(t.currentaffairsData,(function(e,i){return n("v-uni-view",{staticClass:"bodyItem"},[n("v-uni-text",{staticClass:"text1"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"under"},[n("i",{staticClass:"iconfont icon-web"}),n("v-uni-text",{staticClass:"text2"},[t._v(t._s(e.source))])],1),n("v-uni-view",{staticClass:"bottomLine"})],1)})),1),n("v-uni-view",{staticClass:"bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handletoMaterialsPage.apply(void 0,arguments)}}},[n("v-uni-text",[t._v("查阅全部")])],1)],1),n("v-uni-view",{staticClass:"learning-link"},[n("v-uni-view",{staticClass:"head"},[n("v-uni-text",[t._v("学习链接")])],1),n("v-uni-view",{staticClass:"content"},t._l(t.linkData,(function(e,i){return n("v-uni-view",{staticClass:"linkItem",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleWebLink(e.link)}}},[n("v-uni-view",{staticClass:"img"},[n("img",{attrs:{src:e.img,alt:""}})]),n("v-uni-text",[t._v(t._s(e.title))])],1)})),1)],1)],1)},a=[]},1250:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-loading-icon",class:[t.vertical&&"u-loading-icon--vertical"],style:[t.$u.addStyle(t.customStyle)]},[t.webviewHide?t._e():i("v-uni-view",{ref:"ani",staticClass:"u-loading-icon__spinner",class:["u-loading-icon__spinner--"+t.mode],style:{color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:t.otherBorderColor,borderLeftColor:t.otherBorderColor,borderRightColor:t.otherBorderColor,"animation-duration":t.duration+"ms","animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""}},["spinner"===t.mode?t._l(t.array12,(function(t,e){return i("v-uni-view",{key:e,staticClass:"u-loading-icon__dot"})})):t._e()],2),t.text?i("v-uni-text",{staticClass:"u-loading-icon__text",style:{fontSize:t.$u.addUnit(t.textSize),color:t.textColor}},[t._v(t._s(t.text))]):t._e()],1):t._e()},a=[]},"1f62":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-48f2f481], uni-scroll-view[data-v-48f2f481], uni-swiper-item[data-v-48f2f481]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper[data-v-48f2f481]{display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;overflow:hidden}.u-swiper__wrapper[data-v-48f2f481]{flex:1}.u-swiper__wrapper__item[data-v-48f2f481]{flex:1}.u-swiper__wrapper__item__wrapper[data-v-48f2f481]{display:flex;flex-direction:row;position:relative;overflow:hidden;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;flex:1}.u-swiper__wrapper__item__wrapper__image[data-v-48f2f481]{flex:1}.u-swiper__wrapper__item__wrapper__video[data-v-48f2f481]{flex:1}.u-swiper__wrapper__item__wrapper__title[data-v-48f2f481]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;right:0;font-size:%?28?%;padding:%?12?% %?24?%;color:#fff;flex:1}.u-swiper__indicator[data-v-48f2f481]{position:absolute;bottom:10px}',""]),t.exports=e},"23d1":function(t,e,i){"use strict";i.r(e);var n=i("1250"),r=i("95ea");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("3e17");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"8d43a062",null,!1,n["a"],o);e["default"]=d.exports},"31cc":function(t,e,i){var n=i("bf3d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("440e8d52",n,!0,{sourceMap:!1,shadowMode:!1})},3492:function(t,e,i){t.exports=i.p+"static/img/bgimg1.b470c45f.png"},"3e17":function(t,e,i){"use strict";var n=i("b7d7"),r=i.n(n);r.a},"43ce":function(t,e,i){"use strict";i.r(e);var n=i("7d65"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},4776:function(t,e,i){var n=i("75e3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("34744a14",n,!0,{sourceMap:!1,shadowMode:!1})},"47c9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{swapList:["../../static/img/home/swap.png","../../static/img/home/swap.png","../../static/img/home/swap.png"],linkData:[{img:"../../static/img/home/www.12371.cn.png",title:"共产党员网",link:"https://www.12371.cn/"},{img:"../../static/img/home/www.people.com.cn.png",title:"人民网",link:"http://www.people.com.cn/"},{img:"../../static/img/home/cpc.people.com.cn.png",title:"中国共产党新闻网",link:"http://cpc.people.com.cn/"},{img:"../../static/img/home/www.xuexi.cn.png",title:"学习强国网",link:"https://www.xuexi.cn/"}],hotpotData:[{img:"../../static/img/home/hotpot1.png",title:"【奋斗新百年 启航新征程】共同践行伟大时代的历史跨越使命",source:"党史学习教育官网"},{img:"../../static/img/home/hotpot2.png",title:"从百年党史中汲取党史学科发展的智慧（构建中国特色哲学社会科学）",source:"中共党史网"},{img:"../../static/img/home/hotpot3.png",title:"学习党史：中共共产党人的必修课",source:"中国共产党新闻网"}],currentaffairsData:[{title:"【金句回响】《习近平关于总体国家安全观论述摘编》：重点维护领域国家安全",source:"新华网"},{title:"习近平在中国人民大学考察时强调：坚持党的领导传承红色基因扎根中国大地",source:"共产党员网"},{title:"看党史，必须抓主流和主线",source:"党史学习教育网"}]}},onLoad:function(){},methods:{handleWebLink:function(t){uni.navigateTo({url:"./webpage?link="+t})},handletoVideoPage:function(){uni.switchTab({url:"../video/video"})},handletoMaterialsPage:function(){uni.switchTab({url:"../materials/materials"})}}};e.default=n},6116:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-indicator"},["line"===t.indicatorMode?i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper",class:["u-swiper-indicator__wrapper--"+t.indicatorMode],style:{width:t.$u.addUnit(t.lineWidth*t.length),backgroundColor:t.indicatorInactiveColor}},[i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper--line__bar",style:[t.lineStyle]})],1):t._e(),"dot"===t.indicatorMode?i("v-uni-view",{staticClass:"u-swiper-indicator__wrapper"},t._l(t.length,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-swiper-indicator__wrapper__dot",class:[n===t.current&&"u-swiper-indicator__wrapper__dot--active"],style:[t.dotStyle(n)]})})),1):t._e()],1)},a=[]},"6e67":function(t,e,i){t.exports=i.p+"static/img/loveCPC.87aae665.png"},"75e3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-7bf5e5a3], uni-scroll-view[data-v-7bf5e5a3], uni-swiper-item[data-v-7bf5e5a3]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-swiper-indicator__wrapper[data-v-7bf5e5a3]{display:flex;flex-direction:row}.u-swiper-indicator__wrapper--line[data-v-7bf5e5a3]{border-radius:100px;height:4px}.u-swiper-indicator__wrapper--line__bar[data-v-7bf5e5a3]{width:22px;height:4px;border-radius:100px;background-color:#fff;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-swiper-indicator__wrapper__dot[data-v-7bf5e5a3]{width:5px;height:5px;border-radius:100px;margin:0 4px}.u-swiper-indicator__wrapper__dot--active[data-v-7bf5e5a3]{width:12px}',""]),t.exports=e},7678:function(t,e,i){"use strict";i.r(e);var n=i("47c9"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"77de":function(t,e,i){"use strict";var n=i("31cc"),r=i.n(n);r.a},"7d65":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("a60a")),a={name:"u-swiper",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{currentIndex:0}},watch:{current:function(t,e){t!==e&&(this.currentIndex=t)}},computed:{itemStyle:function(){var t=this;return function(e){var i={};return t.nextMargin&&t.previousMargin&&(i.borderRadius=uni.$u.addUnit(t.radius),e!==t.currentIndex&&(i.transform="scale(0.92)")),i}}},methods:{getItemType:function(t){return"string"===typeof t?uni.$u.test.video(this.getSource(t))?"video":"image":"object"===typeof t&&this.keyName?t.type?"image"===t.type?"image":"video"===t.type?"video":"image":uni.$u.test.video(this.getSource(t))?"video":"image":void 0},getSource:function(t){return"string"===typeof t?t:"object"===typeof t&&this.keyName?t[this.keyName]:(uni.$u.error("请按格式传递列表参数"),"")},change:function(t){var e=t.detail.current;this.pauseVideo(this.currentIndex),this.currentIndex=e,this.$emit("change",t.detail)},pauseVideo:function(t){var e=this.getSource(this.list[t]);if(uni.$u.test.video(e)){var i=uni.createVideoContext("video-".concat(t),this);i.pause()}},getPoster:function(t){return"object"===typeof t&&t.poster?t.poster:""},clickHandler:function(t){this.$emit("click",t)}}};e.default=a},8537:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-8d43a062], uni-scroll-view[data-v-8d43a062], uni-swiper-item[data-v-8d43a062]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loading-icon[data-v-8d43a062]{flex-direction:row;align-items:center;justify-content:center;color:#c8c9cc}.u-loading-icon__text[data-v-8d43a062]{margin-left:4px;color:#606266;font-size:14px;line-height:20px}.u-loading-icon__spinner[data-v-8d43a062]{width:30px;height:30px;position:relative;box-sizing:border-box;max-width:100%;max-height:100%;-webkit-animation:u-rotate-data-v-8d43a062 1s linear infinite;animation:u-rotate-data-v-8d43a062 1s linear infinite}.u-loading-icon__spinner--semicircle[data-v-8d43a062]{border-width:2px;border-color:transparent;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-style:solid}.u-loading-icon__spinner--circle[data-v-8d43a062]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-width:2px;border-top-color:#e5e5e5;border-right-color:#e5e5e5;border-bottom-color:#e5e5e5;border-left-color:#e5e5e5;border-style:solid}.u-loading-icon--vertical[data-v-8d43a062]{flex-direction:column}[data-v-8d43a062]:host{font-size:0;line-height:1}.u-loading-icon__spinner--spinner[data-v-8d43a062]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.u-loading-icon__text[data-v-8d43a062]:empty{display:none}.u-loading-icon--vertical .u-loading-icon__text[data-v-8d43a062]{margin:6px 0 0;color:#606266}.u-loading-icon__dot[data-v-8d43a062]{position:absolute;top:0;left:0;width:100%;height:100%}.u-loading-icon__dot[data-v-8d43a062]:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.u-loading-icon__dot[data-v-8d43a062]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes u-rotate-data-v-8d43a062{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-rotate-data-v-8d43a062{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},8597:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("c688")),a={name:"u-swiper-indicator",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{lineWidth:22}},computed:{lineStyle:function(){var t={};return t.width=uni.$u.addUnit(this.lineWidth),t.transform="translateX(".concat(uni.$u.addUnit(this.current*this.lineWidth),")"),t.backgroundColor=this.indicatorActiveColor,t},dotStyle:function(){var t=this;return function(e){var i={};return i.backgroundColor=e===t.current?t.indicatorActiveColor:t.indicatorInactiveColor,i}}}};e.default=a},"95ea":function(t,e,i){"use strict";i.r(e);var n=i("e97c"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"99a0":function(t,e,i){"use strict";i.r(e);var n=i("0cc1"),r=i("7678");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("77de");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"8c488c6e",null,!1,n["a"],o);e["default"]=d.exports},"9bf5":function(t,e,i){"use strict";i.r(e);var n=i("6116"),r=i("e258");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("c53b");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7bf5e5a3",null,!1,n["a"],o);e["default"]=d.exports},"9f0d":function(t,e){t.exports="data:image/png;base64,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"},a60a:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{list:{type:Array,default:uni.$u.props.swiper.list},indicator:{type:Boolean,default:uni.$u.props.swiper.indicator},indicatorActiveColor:{type:String,default:uni.$u.props.swiper.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiper.indicatorInactiveColor},indicatorStyle:{type:[String,Object],default:uni.$u.props.swiper.indicatorStyle},indicatorMode:{type:String,default:uni.$u.props.swiper.indicatorMode},autoplay:{type:Boolean,default:uni.$u.props.swiper.autoplay},current:{type:[String,Number],default:uni.$u.props.swiper.current},currentItemId:{type:String,default:uni.$u.props.swiper.currentItemId},interval:{type:[String,Number],default:uni.$u.props.swiper.interval},duration:{type:[String,Number],default:uni.$u.props.swiper.duration},circular:{type:Boolean,default:uni.$u.props.swiper.circular},previousMargin:{type:[String,Number],default:uni.$u.props.swiper.previousMargin},nextMargin:{type:[String,Number],default:uni.$u.props.swiper.nextMargin},acceleration:{type:Boolean,default:uni.$u.props.swiper.acceleration},displayMultipleItems:{type:Number,default:uni.$u.props.swiper.displayMultipleItems},easingFunction:{type:String,default:uni.$u.props.swiper.easingFunction},keyName:{type:String,default:uni.$u.props.swiper.keyName},imgMode:{type:String,default:uni.$u.props.swiper.imgMode},height:{type:[String,Number],default:uni.$u.props.swiper.height},bgColor:{type:String,default:uni.$u.props.swiper.bgColor},radius:{type:[String,Number],default:uni.$u.props.swiper.radius},loading:{type:Boolean,default:uni.$u.props.swiper.loading},showTitle:{type:Boolean,default:uni.$u.props.swiper.showTitle}}};e.default=n},a9b3:function(t,e,i){"use strict";i.r(e);var n=i("dff7"),r=i("43ce");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("fb7b");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"48f2f481",null,!1,n["a"],o);e["default"]=d.exports},b7d7:function(t,e,i){var n=i("8537");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("0d34cf68",n,!0,{sourceMap:!1,shadowMode:!1})},bf3d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.background[data-v-8c488c6e]{position:absolute;z-index:-3;margin-top:%?0?%}.background img[data-v-8c488c6e]{width:100%;height:100%;object-fit:cover;margin-bottom:%?-100?%}.content[data-v-8c488c6e]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;height:100%}.content .top-img1[data-v-8c488c6e]{position:relative;z-index:-1;margin-top:0}.content .top-img2[data-v-8c488c6e]{display:flex;align-items:center;justify-content:space-between;position:absolute;margin-top:%?-50?%;z-index:1}.content .search[data-v-8c488c6e]{position:absolute;bottom:%?10?%;z-index:2}.wiper[data-v-8c488c6e]{margin-top:%?40?%;padding:0 %?25?%}.hot-spot[data-v-8c488c6e]{display:flex;text-align:center;width:95%;height:%?750?%;background-color:#fff;margin:%?40?% auto;border-radius:%?20?%;flex-direction:column}.hot-spot .head[data-v-8c488c6e]{height:10%;display:flex;align-items:center;margin-top:%?10?%}.hot-spot .head .iconfont[data-v-8c488c6e]{color:#e2000b;font-size:%?40?%;margin-left:%?20?%}.hot-spot .head .text1[data-v-8c488c6e]{font-size:%?32?%;font-weight:600;margin-left:%?10?%}.hot-spot .head .text2[data-v-8c488c6e]{font-size:%?28?%;margin-left:%?20?%;color:#670f13}.hot-spot .detail[data-v-8c488c6e]{display:flex;flex-direction:column;width:100%;height:90%}.hot-spot .detail .detailItem[data-v-8c488c6e]{height:35%;width:100%;display:flex}.hot-spot .detail .detailItem .left[data-v-8c488c6e]{margin-left:%?20?%;height:100%;width:45%}.hot-spot .detail .detailItem .left img[data-v-8c488c6e]{height:75%;width:100%}.hot-spot .detail .detailItem .right[data-v-8c488c6e]{margin-left:%?20?%;display:flex;flex-direction:column;width:55%;text-align:left}.hot-spot .detail .detailItem .right .text1[data-v-8c488c6e]{font-size:%?30?%}.hot-spot .detail .detailItem .right .rright[data-v-8c488c6e]{display:flex;text-align:right}.hot-spot .detail .detailItem .right .rright .text2[data-v-8c488c6e]{margin-right:%?10?%;margin-top:%?30?%;font-size:%?20?%;color:#e50012}.hot-spot .detail .detailItem .right .rright .iconfont[data-v-8c488c6e]{color:#e50012;margin-top:%?30?%}.hot-spot .bottom[data-v-8c488c6e]{text-align:right;margin:0 %?40?% %?10?% 0}.hot-spot .bottom uni-text[data-v-8c488c6e]{color:#e50012;font-weight:600;font-size:%?30?%}.hot-spot .body[data-v-8c488c6e]{display:flex;flex-direction:column;width:100%;height:90%}.hot-spot .body .bodyItem[data-v-8c488c6e]{height:35%;width:100%;display:flex;flex-direction:column}.hot-spot .body .bodyItem .text1[data-v-8c488c6e]{text-align:left;margin-left:%?20?%}.hot-spot .body .bodyItem .under[data-v-8c488c6e]{margin-top:%?10?%;text-align:right;margin-right:%?30?%}.hot-spot .body .bodyItem .under .text2[data-v-8c488c6e]{color:#e50012;font-size:%?22?%}.hot-spot .body .bodyItem .under .iconfont[data-v-8c488c6e]{color:#e50012}.hot-spot .body .bodyItem .bottomLine[data-v-8c488c6e]{width:90%;height:%?2?%;background:linear-gradient(244deg,hsla(0,0%,100%,0),#e50012 50%,hsla(0,0%,100%,0));margin-top:%?20?%}.learning-link[data-v-8c488c6e]{width:95%;height:%?350?%;background-color:#fff;margin:%?40?% auto;border-radius:%?20?%;opacity:.8}.learning-link .head[data-v-8c488c6e]{display:flex;text-align:center;width:100%;height:10%}.learning-link .head uni-text[data-v-8c488c6e]{margin:%?20?% auto;font-size:%?32?%;font-weight:600}.learning-link .content[data-v-8c488c6e]{display:flex;justify-content:space-between;align-items:center;flex-direction:row;width:100%;height:80%}.learning-link .content .linkItem[data-v-8c488c6e]{display:flex;flex-direction:column;text-align:center;width:25%;height:%?200?%;margin:%?30?% 0 0 0}.learning-link .content .linkItem .img[data-v-8c488c6e]{padding-left:%?40?%;width:90%;height:60%;display:flex;align-items:center;text-align:center}.learning-link .content .linkItem .img img[data-v-8c488c6e]{width:70%}.learning-link .content .linkItem uni-text[data-v-8c488c6e]{font-size:%?20?%;margin-top:%?20?%;font-weight:600}',""]),t.exports=e},c53b:function(t,e,i){"use strict";var n=i("4776"),r=i.n(n);r.a},c688:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{length:{type:[String,Number],default:uni.$u.props.swiperIndicator.length},current:{type:[String,Number],default:uni.$u.props.swiperIndicator.current},indicatorActiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorActiveColor},indicatorInactiveColor:{type:String,default:uni.$u.props.swiperIndicator.indicatorInactiveColor},indicatorMode:{type:String,default:uni.$u.props.swiperIndicator.indicatorMode}}};e.default=n},cc36:function(t,e,i){t.exports=i.p+"static/img/bgimg2.bbf5f7ec.png"},dff7:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uLoadingIcon:i("23d1").default,uSwiperIndicator:i("9bf5").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper",style:{backgroundColor:t.bgColor,height:t.$u.addUnit(t.height),borderRadius:t.$u.addUnit(t.radius)}},[t.loading?i("v-uni-view",{staticClass:"u-swiper__loading"},[i("u-loading-icon",{attrs:{mode:"circle"}})],1):i("v-uni-swiper",{staticClass:"u-swiper__wrapper",style:{height:t.$u.addUnit(t.height)},attrs:{circular:t.circular,interval:t.interval,duration:t.duration,autoplay:t.autoplay,current:t.current,currentItemId:t.currentItemId,previousMargin:t.$u.addUnit(t.previousMargin),nextMargin:t.$u.addUnit(t.nextMargin),acceleration:t.acceleration,displayMultipleItems:t.displayMultipleItems,easingFunction:t.easingFunction},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"u-swiper__wrapper__item"},[i("v-uni-view",{staticClass:"u-swiper__wrapper__item__wrapper",style:[t.itemStyle(n)]},["image"===t.getItemType(e)?i("v-uni-image",{staticClass:"u-swiper__wrapper__item__wrapper__image",style:{height:t.$u.addUnit(t.height),borderRadius:t.$u.addUnit(t.radius)},attrs:{src:t.getSource(e),mode:t.imgMode},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler(n)}}}):t._e(),"video"===t.getItemType(e)?i("v-uni-video",{staticClass:"u-swiper__wrapper__item__wrapper__video",style:{height:t.$u.addUnit(t.height)},attrs:{id:"video-"+n,"enable-progress-gesture":!1,src:t.getSource(e),poster:t.getPoster(e),title:t.showTitle&&t.$u.test.object(e)&&e.title?e.title:"",controls:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler(n)}}}):t._e(),t.showTitle&&t.$u.test.object(e)&&e.title&&t.$u.test.image(t.getSource(e))?i("v-uni-text",{staticClass:"u-swiper__wrapper__item__wrapper__title u-line-1"},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper__indicator",style:[t.$u.addStyle(t.indicatorStyle)]},[t._t("indicator",[t.loading||!t.indicator||t.showTitle?t._e():i("u-swiper-indicator",{attrs:{indicatorActiveColor:t.indicatorActiveColor,indicatorInactiveColor:t.indicatorInactiveColor,length:t.list.length,current:t.currentIndex,indicatorMode:t.indicatorMode}})])],2)],1)},a=[]},e0ae:function(t,e,i){var n=i("1f62");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("4ad8f679",n,!0,{sourceMap:!1,shadowMode:!1})},e258:function(t,e,i){"use strict";i.r(e);var n=i("8597"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},e97c:function(t,e,i){"use strict";var n=i("4ea4");i("a630"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("f8bf")),a={name:"u-loading-icon",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor:function(){var t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show:function(t){}},mounted:function(){this.init()},methods:{init:function(){setTimeout((function(){}),20)},addEventListenerToWebview:function(){var t=this,e=getCurrentPages(),i=e[e.length-1],n=i.$getAppWebview();n.addEventListener("hide",(function(){t.webviewHide=!0})),n.addEventListener("show",(function(){t.webviewHide=!1}))}}};e.default=a},e98d:function(t,e,i){t.exports=i.p+"static/img/redflag.8187ed19.png"},f8bf:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{show:{type:Boolean,default:uni.$u.props.loadingIcon.show},color:{type:String,default:uni.$u.props.loadingIcon.color},textColor:{type:String,default:uni.$u.props.loadingIcon.textColor},vertical:{type:Boolean,default:uni.$u.props.loadingIcon.vertical},mode:{type:String,default:uni.$u.props.loadingIcon.mode},size:{type:[String,Number],default:uni.$u.props.loadingIcon.size},textSize:{type:[String,Number],default:uni.$u.props.loadingIcon.textSize},text:{type:[String,Number],default:uni.$u.props.loadingIcon.text},timingFunction:{type:String,default:uni.$u.props.loadingIcon.timingFunction},duration:{type:[String,Number],default:uni.$u.props.loadingIcon.duration},inactiveColor:{type:String,default:uni.$u.props.loadingIcon.inactiveColor}}};e.default=n},fb7b:function(t,e,i){"use strict";var n=i("e0ae"),r=i.n(n);r.a}}]);