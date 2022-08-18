<template>
<!-- 	外部学习网页 -->
	<view>
		<web-view :src="webUrl"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webUrl:''
			};
		},
		onLoad(options) {
			// console.log(options);
			this.webUrl=options.link
		}
	}
</script>

<style lang="scss">

</style>
