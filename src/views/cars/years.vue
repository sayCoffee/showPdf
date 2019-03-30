<template>
  <div class="car-year">
    <div class="select">选择车系年份</div>
    <div class="selected">已选车型：{{ $route.query.brand }}</div>
    <div class="series">
      <ul>
        <router-link 
          v-for="(item,key) in list" 
          :key="key"
          :to="{ path: '/cars/annual', query: { brand: $route.query.brand, serie: item.serie } }"
          tag="li"
          class="car-serie">{{ $route.query.brand }}{{ item.serie }}</router-link>
      </ul>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
  export default {
    components: {
     
    },
    data() {
      return {
        list:[{
          serie:'3系'
        },
        {
          serie:'2系'
        },{
          serie:'4系'
        },
        {
          serie:'x6'
        },
        {
          serie:'7系'
        },
        {
          serie:'x3'
        },
        {
          serie:'x5'
        },
        {
          serie:'1系'
        },
        {
          serie:'x1'
        }
        ,{
          serie:'6系'
        }
        ,{
          serie:'z4'
        }
        ,{
          serie:'z6'
        }]
      }
    },
    mounted() {
      console.log(this.$route);
      console.log(this.$route.query.brand);
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

