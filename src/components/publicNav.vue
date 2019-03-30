<template>
  <nav class="navigation">
    <ul class="title-nav">
      <router-link
        v-for="(item,key) in list"
        :key="key"
        :class="{ 'active': $route.path === item.to }"
        :to="item.to"
        tag="li">{{item.title}}</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "首页",
          to: "/"
        },
        {
          title: "车型",
          to: "/model"
        },
        {
          title: "分类",
          to: "/category"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation {
  overflow: hidden;
  background-color: #ffffff;
  .title-nav {
    overflow: hidden;
    border-bottom: 1px solid #ededed;
    li {
      width: 33.333%;
      float: left;
      font-size: 12px;
      color: #666666;
      position: relative;
      height: 42px;
      line-height: 42px;
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      &.active,
      &:hover {
        color: #1d9ee0;
        &::after {
          background-color: #1d9ee0;
        }
      }
    }
  }
}
</style>
