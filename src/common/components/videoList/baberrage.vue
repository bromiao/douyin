<template>
	<vue-baberrage
		ref="baberrage"
		:isShow="barrageIsShow"
		:barrageList="barrageList"
		:lanesCount="5"
		:maxWordCount="60"
		:loop="barrageLoop"
	></vue-baberrage>
</template>

<script>
import { vueBaberrage, MESSAGE_TYPE } from 'vue-baberrage'

export default {
	name: 'baberrage',
	components: {
		vueBaberrage,
	},
	data() {
		return {
			msg: 'Hello vue-baberrage',
			barrageIsShow: false,
			currentId: 0,
			barrageLoop: true,
			barrageList: [],
		}
	},
	mounted() {
		this.initBarrageData()
	},
	methods: {
		initBarrageData() {
			const barrageData = [
				'主播表演跳舞吗，红红火火恍恍惚惚',
				'圆圈它不圆圆圈它不圆圆圈它不圆',
				'老婆，怕怕',
				'主播真是个大烧杯',
				'这谁顶得住啊！！！',
			]
			barrageData.forEach((item) => {
				this.addToList(item)
			})
		},
		addToList(msg) {
			this.barrageList.push({
				id: ++this.currentId,
				avatar: '/static/avatar.jpg',
				msg: msg || this.msg,
				time: 10,
				type: MESSAGE_TYPE.NORMAL,
			})
		},
	},
}
</script>

<style lang="scss">
.baberrage-stage {
	top: 80px;
}
</style>
