<template>
	<div class="top">
		<div class="top-bar">
			<div class="bar-menu">
				<topItem
					v-for="(item, index) in routeData"
					:top-title="item.title"
					:nav-path="item.path"
					:key="item.path"
					ref="topItem"
					@click.native="toggleTopMenu(index)"
				></topItem>
				<!-- 下划线 -->
				<div
					class="tabs-active-bar"
					:class="{ 'tabs-move': addAnimation }"
					ref="tabsActiveBar"
				></div>
			</div>
		</div>
	</div>
</template>

<script>
import topItem from './TopItem.vue'

export default {
	components: {
		topItem,
	},
	data() {
		return {
			routeData: [
				{ title: '关注', path: '/index/follows' },
				{ title: '推荐', path: '/index/recommend' },
				{ title: '精选', path: '/index/selection' },
			],
			tabIndex: 0,
			addAnimation: true,
		}
	},
	created() {
		this.updateTabIndex()
		this.$nextTick(() => {
			this.toggleTopMenu(this.tabIndex, false)
		})
	},
	methods: {
		// 刷新页面后更新tabBar
		toggleTopMenu(index, needAnimation = true) {
			const dom_ = this.$refs
			let tabsActiveBar = dom_.tabsActiveBar
			let topItem = dom_.topItem[index].$el
			// const width = topItem.clientWidth * 0.7 + 'px' //	在页面上返回内容的可视宽度（不包括边框，边距或滚动条）
			const width = topItem.clientWidth + 'px' //	在页面上返回内容的可视宽度（不包括边框，边距或滚动条）

			tabsActiveBar.style.width = width
			this.tabIndex = index
			this.addAnimation = needAnimation
			if (this.tabIndex == 0) {
				// tabsActiveBar.style.left = dom_.topItem[0].$el.clientWidth * 0.15 + 'px'
				tabsActiveBar.style.left = 0
			} else {
				// const left = topItem.offsetLeft + topItem.clientWidth * 0.15 + 'px' // 返回当前元素的相对水平偏移位置的偏移容器
				const left = topItem.offsetLeft + 'px' // 返回当前元素的相对水平偏移位置的偏移容器
				tabsActiveBar.style.left = `${left}`
			}

			tabsActiveBar = null
			topItem = null
		},
		// 刷新页面后更新tab索引
		updateTabIndex() {
			const route = this.$route.name
			if (route === 'follows') {
				this.tabIndex = 0
			} else if (route === 'recommend') {
				this.tabIndex = 1
			} else {
				this.tabIndex = 2
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.top-bar {
	position: absolute;
	z-index: 9999;
	top: 0;
	left: 0;
	height: 60px;
	width: 100%;
	line-height: 60px;
	display: flex;
	justify-content: space-between;
	font-size: 24px;
	flex: 1;
	padding: 0 60px;
	box-sizing: border-box;
	background-color: rgba(0, 0, 0, 0);
	.bar-fun {
		.iconfont {
			font-size: 28px;
			color: rgb(190, 190, 190);
		}
		.icon-sousuo {
			font-size: 30px;
		}
	}
	.bar-menu {
		position: relative;
		display: flex;
		flex: 1;
		justify-content: space-between;
		font-size: 20px;
		color: rgb(190, 190, 190);
		font-weight: 600;
		.tabs-active-bar {
			position: absolute;
			left: 0.0475rem;
			bottom: 4px;
			width: 30px;
			height: 2px;
			background-color: #ffe600;
			box-sizing: border-box;
			z-index: 1;
			&.tabs-move {
				transition: all 0.3s ease-out;
			}
		}
	}
}
</style>
