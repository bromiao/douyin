<template>
	<div
		class="tab-bar"
		ref="tabBar"
	>
		<TabItem
			tab-title="视频"
			nav-path="/video"
			icon="video"
		></TabItem>
		<TabItem
			tab-title="抖阴"
			nav-path="/index"
			icon="douyin"
		></TabItem>
		<TabItem
			tab-title="游戏"
			nav-path="/game"
			icon="game"
		></TabItem>
		<TabItem
			tab-title="社区"
			nav-path="/community"
			icon="community"
		></TabItem>
		<TabItem
			tab-title="我的"
			nav-path="/mine"
			icon="mine"
		></TabItem>
	</div>
</template>

<script>
import TabItem from './TabItem.vue'

export default {
	name: 'Tabbar',
	components: {
		TabItem,
	},
	mounted() {
		this.$refs.tabBar.style.top = `${window.innerHeight - 60}px`
	},
}
</script>

<style lang="scss" scoped>
.tab-bar {
	background: #000000;
	width: 100vw;
	height: 60px;
	position: fixed;
	// bottom: 0;
	// top: calc(100vh - 160px);
	left: 0;
	display: flex;
	justify-content: space-around;
	color: #cccccc;
	font-size: 16px;
	z-index: 9999;
	.dy-btn {
		width: 50px;
		height: 30px;
		margin: 10px;
	}
}
</style>
