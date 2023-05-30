<template>
	<div class="guanzhu-item">正在加载，请稍后...</div>
</template>

<script>
export default {
	mounted() {
		
	},
}
</script>

<style lang="scss" scoped>
.guanzhu-item {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(100vh - 60px);
	// height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	background-color: #000;
}
</style>
