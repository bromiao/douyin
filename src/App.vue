<template>
	<div
		id="app"
		@click="handleGlobalClick"
	>
		<tabBar></tabBar>

		<router-view></router-view>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import tabBar from '@/common/components/tab/TabBar.vue'

export default {
	name: 'app',
	components: {
		tabBar,
	},
	data() {
		return {
			transitionName: '',
		}
	},
	computed: {
		...mapGetters('global', ['getIsUserInteractive']),
	},
	methods: {
		...mapMutations('global', ['setIsUserInteractive']),
		handleGlobalClick() {
			if (!this.getIsUserInteractive) {
				this.setIsUserInteractive(true)
			}
		},
	},
}
</script>

<style lang="scss">
#app {
	height: 100vh;
	background-color: #101821;
	background-color: #000;
}
</style>
