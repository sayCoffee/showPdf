<template>
  <div class="base">
    <div class="head">
      <span class="repair">汽修修资料库</span>
      <span class="iconfont icon-search"></span>
    </div>
    <div class="content-nav">
      <PublicNav/>
    </div>
    <div class="sort">
      <div class="sort-list">
        <div class="assort">视端图（线布图）</div>
        <div class="assort">培训教材</div>
        <div class="assort">案例分析</div>
      </div>
      <div class="sort-list">
            <div class="assort">视端图（线布图）</div>
            <div class="assort">培训教材</div>
            <div class="assort">案例分析</div>
          </div>
          <div class="sort-list">
            <div class="assort">视端图（线布图）</div>
            <div class="assort">培训教材</div>
            <div class="assort">案例分析</div>
          </div>
    </div>
  </div>
</template>

<script>
  import PublicNav from "@/components/publicNav";
  export default {
    components: {
      PublicNav
    },
    data() {
      return {
  
      };
    },
    mounted() {
  
    },
    methods: {
  
    }
  };
</script>

<style lang="scss" scoped>
  .base {
    .head {
      padding-right: 15px;
      border-bottom: 1px solid #ededed;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background-color: #ffffff;
      .repair {
        font-size: 17px;
        color: #3b3b3b;
      }
      .iconfont {
        float: right;
        color: #1d9ee0;
        font-size: 17px;
      }
    }
    .content-nav {
      text-align: center;
      background-color: #ffffff;
    }
    .sort {
      padding-top: 5px;
      padding-left: 7.5px;
      padding-right: 7.5px;
      background-color: #f1f1f1;
      .sort-list {
        overflow: hidden;
        display: flex;
        .assort {
          margin-top: 5px;
          margin-left: 2.5px;
          margin-right: 2.5px;
          width: 31%;
          float: left;
          font-size: 12px;
          text-align: center;
          background-color: #ffffff;
          padding-top: 26px;
          padding-bottom: 22px;
          flex-grow: 1;
        }
      }
    }
  }
</style>

