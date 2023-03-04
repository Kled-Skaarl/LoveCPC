<template>
	<view>
		<view class="page-header">
			<view class="top-img2">
				<img src="@/static/img/home/loveCPC.png" alt="">
				<img src="@/static/img/home/sss.png" alt="">
			</view>
			<view class="search">
				<search></search>
			</view>
		</view>
		<view class="page-content">
			<view class="header">
				<view class="title-wrap">
					<text class="category">{{originalData.category}}</text>
					<text class="title">{{originalData.title}}</text>
				</view>
				<view class="tools">
					<navigator class="back-mater" url="/pages/materials/materials" open-type="switchTab">返回分类 <i
							class="iconfont icon-gengduo"></i></navigator>
					<i class="iconfont icon-sousuo"></i>
				</view>
			</view>
			<view class="article-card">
				<view class="top">
					<view class="title-wrap">
						<text class="source">{{originalData.article.source}}</text>
						<text class="news_date">{{originalData.article.news_date | date('yyyy-mm-dd hh:MM')}}</text>
					</view>
					<view class="tools">
						<i class="iconfont icon-a-bijibenbiji"></i>
						<i class="iconfont" :class="originalData.article.collected ? 'icon-shoucang2':'icon-shoucang3'"
							@tap="handleCollected"></i>
						<i class="iconfont icon-erweima"></i>
					</view>
				</view>
				<view class="main">
					<view class="title-wrap">
						<text class="title">{{originalData.article.title}}</text>
						<text class="sub-title">{{originalData.article.sub_title}}</text>
					</view>
					<view class="cover">
						<image :src="originalData.article.cover" mode="widthFix" style="width: 100%;"></image>
					</view>
					<view class="original_title">
						<view class="line"></view>
						<view class="text">{{originalData.article.original_title}}</view>
						<view class="line"></view>
					</view>
					<view class="original original-overflow" ref="original" @tap="contentClick">
						<!-- 资料原文 -->
						<u-parse :content="originalData.article.original"></u-parse>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				originalData: {
					id: 4,
					category: '百年影像',
					title: '百炼成钢 历久弥新',
					article: {
						source: '央视新闻',
						news_date: 1660525010614,
						collected: true,
						title: '隐秘而伟大',
						sub_title: '影像中的党史',
						cover: '../../static/img/materials/top_theme.png',
						original_title: '资料原文',
						original: `
							<div class="d2txt clearfix">
								<h2 class="jian"></h2>
								<h1>全党必须完整、准确、全面贯彻新发展理念</h1>
								<h3></h3>
								<div class="d2txt_1 clearfix">来源：《求是》2022/16 &nbsp;&nbsp;发布时间：2022-08-15</div>
								<div class="d2txt_con clearfix">
									<p></p>
									<p style="text-align: center;">
										<strong>全党必须完整、准确、全面</strong>
									</p>
									<p style="text-align: center;">
										<strong>贯彻新发展理念</strong><strong>※</strong>
									</p>
									<p style="text-align: center;">
										习近平</p>
									<p style="text-indent: 2em;">
										今天，中央政治局进行第二十七次集体学习，内容是做好“十四五”时期我国发展开好局、起好步的重点工作。党的十九届五中全会《建议》对“十四五”时期和未来15年我国全面建设社会主义现代化国家的指导方针、主要目标、工作重点、落实机制等都作了明确部署，现在的主要任务就是全力以赴抓落实。
									</p>
									<p style="text-indent: 2em;">
										今年是“十四五”开局之年，是全面建设社会主义现代化国家新征程开局之年，也是我们党成立100周年。做好今年经济社会发展工作、迈好“十四五”时期我国发展第一步，至关重要。第一步要迈准迈稳，迈出新气象，迈出新成效。关于今年经济社会发展工作，党中央已经作出总体部署，我在中央政治局常委会会议、中央政治局会议、中央经济工作会议、中央农村工作会议等场合也都讲了。在这次省部级主要领导干部学习贯彻党的十九届五中全会精神专题研讨班上，我重点就把握新发展阶段、贯彻新发展理念、构建新发展格局等重大理论和实践问题讲了意见。
									</p>
									<p style="text-indent: 2em;">
										在这次省部级主要领导干部专题研讨班上，我特别强调，新发展理念是一个系统的理论体系，回答了关于发展的目的、动力、方式、路径等一系列理论和实践问题，阐明了我们党关于发展的政治立场、价值导向、发展模式、发展道路等重大政治问题，全党必须完整、准确、全面贯彻新发展理念。这里，我想就这个问题再谈点意见。
									</p>
									<p style="text-align:center;">
										<img alt=""
											desc="2022年6月8日，中共中央总书记、国家主席、中央军委主席习近平在四川考察。这是8日下午，习近平在宜宾市极米光电有限公司考察，了解企业自主创新和产品研发销售情况。 新华社记者 谢环驰/摄"
											src="../../static/img/article/2454669004630487971.jpg">
									</p>
									<p class="desc" style="text-align: center;">
										2022年6月8日，中共中央总书记、国家主席、中央军委主席习近平在四川考察。这是8日下午，习近平在宜宾市极米光电有限公司考察，了解企业自主创新和产品研发销售情况。 新华社记者 谢环驰/摄</p>
									<p style="text-indent: 2em;">
										<strong>第一，扎扎实实贯彻新发展理念。</strong>党的十八届五中全会明确了创新、协调、绿色、开放、共享的新发展理念。5年多来，我反复强调全党要深刻认识到，创新是引领发展的第一动力，协调是持续健康发展的内在要求，绿色是永续发展的必要条件和人民对美好生活追求的重要体现，开放是国家繁荣发展的必由之路，共享是中国特色社会主义的本质要求，坚持创新发展、协调发展、绿色发展、开放发展、共享发展是关系我国发展全局的一场深刻变革，全党全国要统一思想、协调行动、开拓前进。
									</p>
									<p style="text-indent: 2em;">
										新发展理念是一个整体，无论是中央层面还是部门层面，无论是省级层面还是省以下各级层面，在贯彻落实中都要完整把握、准确理解、全面落实，把新发展理念贯彻到经济社会发展全过程和各领域。要抓住主要矛盾和矛盾的主要方面，切实解决影响构建新发展格局、实现高质量发展的突出问题，切实解决影响人民群众生产生活的突出问题。创新发展、协调发展、绿色发展、开放发展、共享发展，在工作中都要予以关注，使之协同发力、形成合力，不能畸轻畸重，不能以偏概全。
									</p>
									<p style="text-indent: 2em;">
										从中央层面来说，要从规划设计、宏观指导、政策法律、财政投入、工作安排等方面对全党全国作出指导，抓好关键环节，通过重点突破带动贯彻新发展理念整体水平提升，从全局上不断提高全党全国贯彻落实新发展理念的能力和水平。各部门既要按照自身职责抓好新发展理念涉及本部门的重点工作，也要综合考虑本部门工作对全党全国贯彻新发展理念的作用和影响，不能单打一，只管自己的一亩三分地。各地区要根据自身条件和可能，既全面贯彻新发展理念，又抓住短板弱项来重点推进，不能脱离实际硬干，更不要为了出政绩不顾条件什么都想干，最后什么也干不成。比如，创新发展大家都要抓，但具体到各种关键核心技术，不是家家都能干的，要看条件和可能，同时要看全国科技创新发展布局，从自己的优势领域着力，不能盲目上项目；协调发展、开放发展家家都要抓，同时东部和西部、发达地区和欠发达地区、沿海地区和内地条件各有不同，要从实际出发来抓；绿色发展、共享发展家家都要抓，没有选择余地，同时要聚焦本地区主要问题，突出本地区重点领域，不能脱离本地区承受能力，更不能只顾经济发展而忽略了绿色、共享这两头。
									</p>
									<p style="text-indent: 2em;">
										<strong>第二，落实以人民为中心的发展思想。</strong>古人说：“民富国强，众安道泰。”进入新发展阶段，完整、准确、全面贯彻新发展理念，必须更加注重共同富裕问题。提出新发展理念时，我就强调，共享是中国特色社会主义的本质要求，必须坚持发展为了人民、发展依靠人民、发展成果由人民共享，作出更有效的制度安排，使全体人民在共建共享发展中有更多获得感，增强发展动力，增进人民团结，朝着共同富裕方向稳步前进。在这次省部级主要领导干部专题研讨班上，我又讲了促进全体人民共同富裕这个问题，强调实现共同富裕不仅是经济问题，而且是关系党的执政基础的重大政治问题。
									</p>
									<p style="text-indent: 2em;">
										马克思在《1857—1858年经济学手稿》中说，在未来的社会主义制度中，社会生产力的发展将如此迅速，生产将以所有人的富裕为目的。毛泽东同志也早就说过：“这个富，是共同的富，这个强，是共同的强，大家都有份”。邓小平同志说：“共同致富，我们从改革一开始就讲，将来总有一天要成为中心课题。社会主义不是少数人富起来、大多数人穷，不是那个样子。社会主义最大的优越性就是共同富裕，这是体现社会主义本质的一个东西。”
									</p>
									<p style="text-indent: 2em;">
										党的十八大以来，我们党对共同富裕道路作了新的探索，对共同富裕理论作了新的阐释，对共同富裕目标作了新的部署。党的十九届五中全会向着更远的目标谋划共同富裕，提出了“全体人民共同富裕取得更为明显的实质性进展”的目标。共同富裕本身就是社会主义现代化的一个重要目标。我们不能等实现了现代化再来解决共同富裕问题，而是要始终把满足人民对美好生活的新期待作为发展的出发点和落脚点，在实现现代化过程中不断地、逐步地解决好这个问题。要自觉主动解决地区差距、城乡差距、收入差距等问题，坚持在发展中保障和改善民生，统筹做好就业、收入分配、教育、社保、医疗、住房、养老、扶幼等各方面工作，更加注重向农村、基层、欠发达地区倾斜，向困难群众倾斜，促进社会公平正义，让发展成果更多更公平惠及全体人民。促进全体人民共同富裕是一项长期任务，也是一项现实任务，急不得，也等不得，必须摆在更加重要的位置，脚踏实地，久久为功，向着这个目标作出更加积极有为的努力。
									</p>
									<p style="text-align:center;">
										<img alt="" desc="2021年10月26日，中共中央总书记、国家主席、中央军委主席习近平在北京展览馆参观国家“十三五”科技创新成就展。 新华社记者 谢环驰/摄"
											src="../../static/img/article/6125118613339441697.jpg">
									</p>
									<p class="desc" style="text-align: center;">
										2021年10月26日，中共中央总书记、国家主席、中央军委主席习近平在北京展览馆参观国家“十三五”科技创新成就展。 新华社记者 谢环驰/摄</p>
									<p style="text-indent: 2em;">
										<strong>第三，继续深化改革开放。</strong>完整、准确、全面贯彻新发展理念，既要以新发展理念指导引领全面深化改革，又要通过深化改革为完整、准确、全面贯彻新发展理念提供体制机制保障。我国改革和发展实践告诉我们，唯有全面深化改革，才能更好践行新发展理念，破解发展难题、增强发展活力、厚植发展优势。党的十八届三中全会以来，我国主要领域改革主体框架基本确立，前期重点是夯基垒台、立柱架梁，中期重点在全面推进、积厚成势，现在要把着力点放到围绕完整、准确、全面贯彻新发展理念，加强系统集成、精准施策上来。
									</p>
									<p style="text-indent: 2em;">
										我们要在已有改革基础上，立足贯彻新发展理念、构建新发展格局，坚持问题导向，围绕增强创新能力、推动平衡发展、改善生态环境、提高开放水平、促进共享发展等重点领域和关键环节，继续把改革推向深入，更加精准地出台改革方案，更加全面地完善制度体系。
									</p>
									<p style="text-align:center;">
										<img alt=""
											desc="2021年8月23日至24日，中共中央总书记、国家主席、中央军委主席习近平在河北省承德市考察。这是23日下午，习近平在塞罕坝机械林场月亮山考察。 新华社记者 谢环驰/摄"
											src="../../static/img/article/2288451451913472974.jpg">
									</p>
									<p class="desc" style="text-align: center;">
										2021年8月23日至24日，中共中央总书记、国家主席、中央军委主席习近平在河北省承德市考察。这是23日下午，习近平在塞罕坝机械林场月亮山考察。 新华社记者 谢环驰/摄</p>
									<p style="text-indent: 2em;">
										<strong>第四，坚持系统观念。</strong>完整、准确、全面贯彻新发展理念，必须坚持系统观念。我在党的十九届五中全会、中央经济工作会议等场合多次强调了坚持系统观念问题。毛泽东同志说过：“不但要研究每一个大系统的物质运动形式的特殊的矛盾性及其所规定的本质，而且要研究每一个物质运动形式在其发展长途中的每一个过程的特殊的矛盾及其本质。”完整、准确、全面贯彻新发展理念，要统筹国内国际两个大局，统筹“五位一体”总体布局和“四个全面”战略布局，加强前瞻性思考、全局性谋划、战略性布局、整体性推进。
									</p>
									<p style="text-indent: 2em;">
										比如，要统筹中华民族伟大复兴战略全局和世界百年未有之大变局，立足国内，放眼世界，深刻认识错综复杂的国际局势对我国的影响，既保持战略定力又善于积极应变，既集中精力办好自己的事，又积极参与全球治理、为国内发展创造良好环境。比如，新冠肺炎疫情仍然是今年经济社会发展最大的不确定性因素，要统筹疫情防控和经济社会发展，毫不放松抓好“外防输入、内防反弹”工作，确保不出现规模性输入和反弹。比如，要统筹发展和安全，我在中央政治局第二十六次集体学习时就贯彻落实总体国家安全观提出了“十个坚持”的要求。我们在谋划和推进发展的时候，要善于预见和预判各种风险挑战，做好应对各种“黑天鹅”、“灰犀牛”事件的预案，不断增强发展的安全性。
									</p>
									<p style="text-indent: 2em;">
										<strong>第五，善于从政治上看问题。</strong>马克思主义认为，经济是基础，政治是经济的集中反映。毛泽东同志说过，“一切问题的关键在政治”。完整、准确、全面贯彻新发展理念，是经济社会发展的工作要求，也是十分重要的政治要求。改革发展稳定、内政外交国防、治党治国治军，样样是政治，样样离不开政治。党领导人民治国理政，最重要的就是处理好各种复杂的政治关系，始终保持党和国家事业发展的正确政治方向。
									</p>
									<p style="text-indent: 2em;">
										越是形势复杂、任务艰巨，越要坚持党的全面领导和党中央集中统一领导，越要把党中央关于贯彻新发展理念的要求落实到工作中去。只有站在政治高度看，对党中央的大政方针和决策部署才能领会更透彻，工作起来才能更有预见性和主动性。各级领导干部特别是高级干部要不断提高政治判断力、政治领悟力、政治执行力，对“国之大者”了然于胸，把贯彻党中央精神体现到谋划重大战略、制定重大政策、部署重大任务、推进重大工作的实践中去，经常对表对标，及时校准偏差。各级党组织和领导干部要有很强的责任意识，守土有责、守土负责、守土尽责，无论什么时候，该做的事，知重负重、攻坚克难，顶着压力也要干；该负的责，挺身而出、冲锋在前，冒着风险也要担。发现了问题、发现了问题的苗头就要及时处理，该请示报告的必须请示报告，不能麻木不仁，不能逃避责任，更不能隐瞒不报，最后拖成了不可收拾的局面。各级党委和政府要落实各项工作责任制，科学排兵布阵，层层压实责任，推动各级党组织、各个部门、各条战线、各行各业尽忠职守、主动作为，为庆祝建党100周年营造良好社会环境。
									</p>
									<p style="text-indent: 2em;">
										※这是习近平总书记2021年1月28日在十九届中央政治局第二十七次集体学习时的讲话。</p>
									<p></p>
								</div>
								<div class="editor clearfix">(责编：唐宋 )</div>
								<!--copyright-->
								<div id="copyright" class="copyright">
									人 民 网 版 权 所 有 ，未 经 书 面 授 权 禁 止 使 用 &nbsp;<br>
									Copyright © 1997-2022 by www.people.com.cn. all rights reserved<br>
									<a href="http://www.beian.miit.gov.cn/" target="_blank">京ICP备12004265号-1</a>
								</div>
							</div>
						`
					}
				}
			};
		},
		onLoad(options) {
			console.log(options.id);
		},
		onReady() {
			this.getArticleData();
		},
		methods: {
			handleCollected() {
				let collected = this.originalData.article.collected;
				this.originalData.article.collected = !collected;
				if (!collected) {
					uni.showToast({
						title: '收藏成功'
					});
				} else {
					uni.showToast({
						title: '已取消收藏'
					});
				}
			},
			contentClick() {
				let el = this.$refs.original.$el;
				el.classList.toggle('original-overflow');
			},
			// 可获取文章数据
			getArticleData() {
				this.$nextTick(() => {
					let query = uni.createSelectorQuery().in(this);
					console.log(query,'s');
					console.log(query.select('.original'),'s2');
					query.select('.original .d2txt_con').boundingClientRect().exec(res => {
						console.log(res);
					});
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: url('@/static/img/materials/light_red.png');
		min-height: 100%;
	}

	.page-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		min-height: 100px;
		max-height: 200px;
		height: 248upx;
		background: url('@/static/img/materials/dome_light.png') top no-repeat;
		background-size: contain;

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
		padding: 25upx;
		background: url('@/static/img/materials/azalea.png') left;
		>.header {
			padding: 10upx 0;
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
				transform: translateY(10upx);
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
				justify-content: end;
				font-size: 28upx;
				min-width: 100px;

				.iconfont {
					font-size: 28upx;
					font-weight: 700;
				}

				.back-mater {
					color: #d02a32;

					.iconfont {
						margin-left: 5upx;
					}
				}

				.icon-sousuo {
					margin-left: 15upx;
					font-size: 30upx;
					color: #666;
				}
			}
		}

		>.article-card {
			padding: 25upx;
			margin: 40upx 0;
			// background-image: linear-gradient(to bottom, white, transparent);
			border-radius: 10upx;
			box-shadow: 0 0 20upx #ccc;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 4upx;
				background: linear-gradient(to left, #fff 0%, #e50012 30%, #e50012 70%, #fff 100%);
			}

			.top {
				display: flex;
				justify-content: space-between;
				align-items: baseline;
				position: relative;

				.title-wrap {
					font-size: 24upx;

					.source {
						color: #e51e2c;
					}

					.news_date {
						// font-size: 24upx;
						color: #813a3d;
						margin-left: 15upx;
					}
				}

				.tools {
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

			.main {
				padding-bottom: 15upx;

				.title-wrap {
					font-size: 30upx;
					font-weight: 700;
					line-height: 1.5em;
					color: #e50416;
					padding: 20upx 0;
					text-align: center;

					.sub-title {
						margin-left: 15upx;
						padding-left: 15upx;
						position: relative;

						&::before {
							content: '';
							width: 4upx;
							height: 28upx;
							background-color: #e50416;
							position: absolute;
							left: -3upx;
							top: 10upx;
						}
					}
				}

				.original_title {
					margin-top: 20upx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.line {
						flex: 1;
						height: 2upx;
						background: linear-gradient(to left, #fff 0%, #e50012 30%, #e50012 70%, #fff 100%);
					}

					.text {
						font-size: 32upx;
						font-weight: 800;
						color: #813a3d;
						padding: 25upx;
						position: relative;

						&::before {
							content: '';
							width: 35upx;
							height: 8upx;
							position: absolute;
							top: 0;
							left: 50%;
							transform: translateX(-50%);
							background-color: #e50010;
						}
					}
				}

				.original /deep/ {
					font-size: 28upx;

					h1 {
						font-size: 36upx;
						text-align: center;
						margin: 10upx 0;
					}

					.d2txt_con {
						margin-top: 20upx;
						padding-top: 20upx;
						border-top: 1px solid #d0d0d0;
						line-height: 1.5em;
						font-size: 32upx;

						p {
							margin: 20upx 0;
						}
					}

					.editor {
						text-align: right;
						color: #ba0107;
					}

					.d2_4 {
						input {
							font-size: 18px;
							width: 89px;
							height: 39px;
							background: #c61202;
							line-height: 39px;
							border: none;
							color: #fff;
							margin-left: 16px;
							vertical-align: middle;
							cursor: pointer;
						}
					}

					.copyright {
						clear: both;
						text-align: center;
						margin: 20upx 0;
					}
				}

				.original-overflow /deep/ {
					.d2txt {
						// display: -webkit-box;
						// -webkit-box-orient: vertical;
						// -webkit-line-clamp: 12;
						// overflow: hidden;
						// text-overflow: ellipsis;
					}
				}
			}
		}
	}
</style>
