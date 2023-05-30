<template>
	<div
		class="item"
		@click="itemClick"
	>
		<router-link
			:to="navPath"
			tag="div"
			:class="isActive ? 'active' : ''"
		>
			{{ topTitle }}
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		topTitle: {
			type: String,
			default: '',
		},
		navPath: {
			type: String,
			// default: '/index/recommend/reVideoList',
			default: '/index/recommend',
		},
	},
	computed: {
		isActive() {
			return this.$route.path === this.navPath
		},
	},
	methods: {
		itemClick() {
			console.log(this.$route.path)
		},
	},
}
</script>

<style lang="scss" scoped>
.active {
	color: #FFE600;
	font-weight: 600;
	position: relative;
	// &:after {
	// 	content: '';
	// 	height: 2px;
	// 	width: 30px;
	// 	left: 3px;
	// 	bottom: 5px;
	// 	position: absolute;
	// 	background: #FFE600;
	// }
}
</style>
