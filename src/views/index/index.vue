<template>
	<div class="home-content">
		<topBar></topBar>
		<transition :name="transitionName">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import topBar from '@/common/components/top/TopBar.vue'

export default {
	components: {
		topBar,
	},
	data() {
		return {
			transitionName: '',
		}
	},
	watch: {
		$route(to, from) {
			if (to.meta.index > from.meta.index) {
				this.transitionName = 'slide-left'
			} else if (to.meta.index < from.meta.index) {
				this.transitionName = 'slide-right'
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.home-content {
	width: 100%;
	height: 100vh;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
	will-change: transform;
	transition: all 500ms;
	position: absolute;
}
// 右滑初始装状态
.slide-right-enter {
	// opacity: 0;
	transform: translate3d(-100%, 0, 0);
}

// 右滑执行状态
.slide-right-leave-active {
	// opacity: 0;
	transform: translate3d(100%, 0, 0);
}
// 右滑最终状态
.slide-right-enter-to {
	// opacity: 1;
	transform: translate3d(0, 0, 0);
}
// 左滑初始装状态
.slide-left-enter {
	// opacity: 0;
	transform: translate3d(100%, 0, 0);
}
// 左滑执行状态
.slide-left-leave-active {
	// opacity: 0;
	transform: translate3d(-100%, 0, 0);
}
// 左滑最终状态
.slide-right-enter-to {
	// opacity: 1;
	transform: translate3d(0, 0, 0);
}
</style>
