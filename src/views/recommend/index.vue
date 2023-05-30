<template>
	<div class="tuijian-item">
		<!-- <router-view></router-view> -->
		<VideoList />
	</div>
</template>

<script>
import VideoList from '@/common/components/videoList/VideoList.vue'
export default {
	components: {
		VideoList
	},
	mounted() {
		console.log('推荐')
		// this.$router.push({ path: '/index/recommend/reVideoList' })
	},
}
</script>

<style lang="scss" scoped>
.tuijian-item {
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
