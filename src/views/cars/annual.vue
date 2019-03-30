<template>
  <div class="car-year">
    <div class="select">选择车型车系年款</div>
    <div class="selected">已选车型：{{ $route.query.brand }} {{ $route.query.brand }}{{ $route.query.serie }}</div>
    <div class="series">
      <ul>
        <router-link 
          v-for="(item,key) in list" 
          :key="key"
          :to="{ path: '/cars/manual', query: { brand: $route.query.brand, serie: $route.query.serie, style: item.style } }"
          tag="li"
          class="car-serie">{{ item.style }}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
     
    },
    data() {
      return {
        list:[{
          style:'2016款 2.0T  手自一体 豪华版'
        },
        {
          style:'2016款 2.0T  手自一体 豪华版'
        },{
          style:'2016款 2.0T  手自一体 豪华版'
        },
        {
          style:'2016款 2.0T  手自一体 豪华版'
        },
        {
          style:'2016款 2.0L  自动档 标准版 '
        },
        {
          style:'2016款 2.0L  自动档 标准版 '
        },]
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
    .select {
      padding-top: 13px;
      padding-bottom: 14px;
      font-size: 17px;
      text-align: center;
      color: #3b3b3b;
      border-bottom: 1px solid #dedede;
      background-color: #ffffff;
    }
    .selected {
      padding-top: 15px;
      padding-bottom: 16px;
      padding-left: 12px;
      font-size: 14px;
      color: #1d9ee0;
      border-bottom: 1px solid #dedede;
      background-color: #ffffff;
    }
    .series {
      background-color: #efefef;
      padding-top: 5px;
      .car-serie {
        padding-top: 17px;
        padding-left: 12px;
        padding-bottom: 14px;
        background-color: #ffffff;
        border-bottom: 1px solid #dedede;
      }
    }
    .foot {
      height: 33px;
      background-color: #efefef;
    }
  }
</style>

