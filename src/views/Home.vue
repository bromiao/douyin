<template>
	<div class="home">
		<router-view />
		<maskGuide></maskGuide>
	</div>
</template>

<script>
import maskGuide from '@/common/components/maskGuide/maskGuide.vue'

export default {
	components: {
		maskGuide,
	},
	created() {
		
	},
}
</script>

<style lang="scss" scoped>
	.home {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
	}
</style>
