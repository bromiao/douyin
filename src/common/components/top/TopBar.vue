<template>
  <div class="top">
    <div class="top-bar">
      <div class="bar-menu">
        <topItem top-title="关注" nav-path="/index/follows"> </topItem>
        <topItem top-title="推荐" nav-path="/index/recommend/reVideoList"> </topItem>
        <topItem top-title="精选" nav-path="/index/selection"> </topItem>
      </div>
    </div>
  </div>
</template>

<script>
import topItem from './TopItem.vue';

export default {
  components: {
    topItem,
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  position: absolute;
  z-index: 99;
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
    display: flex;
    flex: 1;
    justify-content: space-between;
    font-size: 20px;
    color: rgb(190, 190, 190);
    font-weight: 600;
  }
}
</style>
