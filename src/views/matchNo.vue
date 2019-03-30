<template>
  <div class="match">
    <div class="match-search">
      <div class="search-content">
        <input type="text" placeholder="请输入搜索内容">
        <span class="iconfont icon-del"></span>
      </div>
      <div class="search-for">搜索</div>
    </div>
    <div class="sorry-foot">抱歉，没有找到符合条件的资料</div>
  </div>
</template>

<script>
import PublicSystem from '@/components/publicSystem';
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
  .match {
    .match-search {
      padding-top: 7px;
      padding-left: 50px;
      padding-bottom: 8px;
      padding-right: 51px;
      border-bottom: 1px solid #ededed;
      background-color: #ffffff;
      .search-content {
        padding-top: 8px;
        padding-bottom: 9px;
        padding-left: 15px;
        background-color: #e5e5e5;
        border-radius: 15px;
        position: relative;
        input {
          border: 0;
          font-size: 14px;
          color: #3b3b3b;
          outline: none;
          background-color: #e5e5e5;
          width: calc(100% - 38px);
        }
        .iconfont {
          float: right;
          padding-right: 8px;
        }
      }
      .search-for {
        float: right;
        font-size: 14px;
        color: #1d9ee0;
        position: absolute;
        top: 15px;
        right: 13px;
      }
    }
    .sorry-foot {
      padding-top: 50px;
      font-size: 12px;
      color: #999999;
      text-align: center;
    }
  }
</style>

