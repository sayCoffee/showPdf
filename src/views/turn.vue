<template>
  <div class="car-turn">
    <div class="turn-system">转向系统</div>
    <div>
      <PublicSystem />
    </div>
    <div class="foot">上拉加载更多</div>
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
  .car-turn {
    .turn-system {
      padding-top: 14px;
      padding-bottom: 14px;
      text-align: center;
      background-color: #ffffff;
      font-size: 17px;
      color: #3b3b3b;
      border-bottom: 1px solid #ededed;
    }
    .foot {
      padding-top: 26px;
      text-align: center;
      font-size: 12px;
      color: #999999;
    }
  }
</style>

