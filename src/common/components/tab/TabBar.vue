<template>
  <div class="tab-bar">
    <TabItem tab-title="视频" nav-path="/video" icon="video"></TabItem>
    <TabItem tab-title="抖阴" nav-path="/douyin" icon="douyin"></TabItem>
    <TabItem tab-title="游戏" nav-path="/game" icon="game"></TabItem>
    <TabItem tab-title="社区" nav-path="/community" icon="community"></TabItem>
    <TabItem tab-title="我的" nav-path="/mine" icon="mine"></TabItem>
  </div>
</template>

<script>
import TabItem from './TabItem.vue';

export default {
  name: 'Tabbar',
  components: {
    TabItem,
  },
};
</script>

<style lang="scss" scoped>
.tab-bar {
  background: #000000;
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  color: #cccccc;
  font-size: 16px;
  z-index: 99;
  .dy-btn {
    width: 50px;
    height: 30px;
    margin: 10px;
  }
}
</style>
