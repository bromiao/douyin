<template>
  <div class="item" @click="itemClick">
    <router-link
      :to="navPath"
      tag="div"
      class="flex-item"
      :class="isActive ? 'active' : ''"
    >
      <i class="icon" :class="'bar-' + icon"></i>
      <span>{{ tabTitle }}</span>
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
    props: {
        tabTitle: {
            type: String,
            default: '',
        },
        navPath: {
            type: String,
            default: '/index',
        },
        icon: {
            type: String,
            default: ''
        }
    },
    computed: {
        isActive() {
            return this.$route.path.split('/')[1] === this.navPath.split('/')[1];
        },
    },
    methods: {
        itemClick() {
            console.log(this.$route.path.split('/')[1]);
        },
    },
};
</script>

<style lang="scss" scoped>
.item {
  flex: 1;
  text-align: center;
  font-weight: 500;
  .flex-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  [class*=bar-] {
    display: block;
    width: 38px;
    height: 38px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @each $svg in video, douyin, game, community, mine {
    .bar-#{$svg} {
      background-image: url('~@/assets/images/svg/bar-#{$svg}.svg');
    }
  }

}
.active {
  color: #ffff;
  font-weight: 600;
}
</style>
