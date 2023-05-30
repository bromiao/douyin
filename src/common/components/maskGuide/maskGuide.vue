<template>
	<div
		class="mask-guide"
		v-if="showMaskGuide"
		@click.stop="handleMaskGuide"
	>
		<div class="slide-down">
			<i class="icon icon-tips-pointer-down"></i>
			<div class="tips">下滑 返回上一个视频</div>
		</div>

		<div class="pointer-click">
			<i class="icon icon-tips-pointer-click"></i>
			<div class="tips">单击 暂停/播放</div>
		</div>

		<div class="pointer-long-press">
			<i class="icon icon-tips-pointer-long-press"></i>
			<div class="tips">按住 3倍快进</div>
		</div>

		<div class="slide-up">
			<i class="icon icon-tips-pointer-up"></i>
			<div class="tips">上滑 进入下一个视频</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'mask-guide',
	data() {
		return {
			// 初次进入推荐页时才显示遮罩指引
			showMaskGuide: localStorage.getItem('maskGuide') !== '0',
		}
	},
	methods: {
		// 点击屏幕后隐藏遮罩指引
		handleMaskGuide() {
			localStorage.setItem('maskGuide', '0')
			this.showMaskGuide = false
		},
	},
}
</script>

<style scoped lang="scss">
.mask-guide {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 99;
	.slide-down,
	.slide-up,
	.pointer-click,
	.pointer-long-press {
		position: absolute;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #fff;
		z-index: 100;
	}
	.slide-down {
		width: 180px;
		height: 52px;
		left: 50%;
		top: 170px;
	}
	.slide-up {
		width: 180px;
		height: 52px;
		left: 50%;
		bottom: 170px;
	}
	.pointer-click {
		width: 140px;
		height: 36px;
		left: 50%;
		top: 270px;
	}
	.pointer-long-press {
		width: 144px;
		height: 46px;
		left: 50%;
		bottom: 270px;
	}
	.icon-tips-pointer-down {
		width: 26px;
		height: 52px;
		background: url('~@/assets/images/svg/tips-pointer-down.svg') center / cover no-repeat;
		animation: slideDown 2s linear infinite;
	}
	.icon-tips-pointer-up {
		width: 26px;
		height: 52px;
		background: url('~@/assets/images/svg/tips-pointer-up.svg') center / cover no-repeat;
		animation: slideUp 2s linear infinite;
	}
	.icon-tips-pointer-click {
		width: 26px;
		height: 36px;
		background: url('~@/assets/images/svg/tips-pointer-click.svg') center / cover no-repeat;
	}
	.icon-tips-pointer-long-press {
		width: 44px;
		height: 46px;
		background: url('~@/assets/images/svg/tips-pointer-long-press.svg') center / cover no-repeat;
	}

	@keyframes slideDown {
		to {
			transform: translateY(20px);
		}
	}

	@keyframes slideUp {
		to {
			transform: translateY(-20px);
		}
	}
}
</style>
