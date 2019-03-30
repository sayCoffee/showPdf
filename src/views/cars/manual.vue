<template>
  <div class="car-year">
    <div class="select">选择车型</div>
    <div class="selected">已选车型：{{ $route.query.brand }} {{ $route.query.brand }}{{ $route.query.serie }} {{ $route.query.style }}</div>
    <div>
      <PublicSystem />
    </div>
    <div class="foot">
      <span class="top-load">上拉加载更多</span>
    </div>
  </div>
</template>

<script>
  import PublicSystem from "@/components/publicSystem";
  export default {
    components: {
      PublicSystem,
    },
    data() {
      return {
      }
    },
    mounted() {
  
    },
    methods: {
  
    }
  };
</script>

<style lang="scss" scoped>
  .car-year {
    background-color: #ffffff;
    .select {
      padding-top: 13px;
      padding-bottom: 14px;
      font-size: 17px;
      text-align: center;
      color: #3b3b3b;
      border-bottom: 1px solid #dedede;
    }
    .selected {
      padding-top: 15px;
      padding-bottom: 16px;
      padding-left: 12px;
      font-size: 14px;
      color: #1d9ee0;
      border-bottom: 1px solid #dedede;
    }
    .foot {
      background-color: #efefef;
      padding-top: 31px;
      padding-bottom: 158px;
      text-align: center;
      .top-load {
        font-size: 12px;
        color: #999999;
      }
    }
  }
</style>

