<template>
  <div class="base">
    <div class="head">
      <span class="repair">汽修修资料库</span>
      <span class="iconfont icon-search"></span>
    </div>
    <div class="content-nav">
      <PublicNav/>
    </div>
    <div class="find">
      <div class="car-find">
        <span class="iconfont icon-look"></span>
        <input type="text" class="find-brand" placeholder="搜索您要查找的品牌">
      </div>
    </div>
    <div class="cart-data">
      <div v-for="(item, key) in carData" :key="key" class="cart-list">
        <div class="letter">{{ item.letter }}</div>
        <ul>
          <router-link 
            v-for="(v, k) in item.list" 
            :key="k" 
            :to="{ path: '/cars/years', query: { brand: v.brand } }" 
            tag="li" 
            class="car-brand">
            {{ v.brand }}
          </router-link>
        </ul>
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
        carData: [{
            letter: 'A',
            list: [{
                brand: '奥迪'
              },
              {
                brand: '阿斯顿马丁'
              },
              {
                brand: '安凯客车'
              },
            ]
          },
          {
            letter: 'B',
            list: [{
                brand: '宝马'
              },
              {
                brand: '奔驰'
              },
              {
                brand: '奔利'
              },
              {
                brand: '别克'
              },
              {
                brand: '保时捷'
              },
            ]
          },
          {
            letter: 'C',
            list: [{
                brand: '长城'
              },
              {
                brand: '长安'
              },
            ]
          },
        ]
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
    }
    .find {
      background-color: #f1f1f1;
      padding-top: 10px;
      padding-left: 15px;
      padding-right: 16px;
      .car-find {
        background-color: #ffffff;
        border: solid 1px #dedede;
        border-radius: 15px;
        padding: 7.5px 10px;
        box-sizing: border-box;
        overflow: hidden;
        .find-brand {
          border: 0;
          font-size: 12px;
          color: #cbcbcb;
          width: calc(100% - 19px); //计算剩余宽度
          float: left;
          margin-top: 2px;
          outline: none; //获取焦点时去掉input外边框
        }
        .iconfont {
          width: 14px;
          height: 14px;
          margin-right: 5px;
          float: left;
        }
      }
    }
    .cart-data {
      .cart-list {
        .letter {
          font-size: 14px;
          color: #3b3b3b;
          padding-left: 16px;
          padding-top: 12px;
          background-color: #f1f1f1;
          border-bottom: 1px solid #dedede;
        }
        .car-brand {
          padding-top: 16px;
          padding-left: 15px;
          padding-bottom: 14px;
          border-bottom: 1px solid #dedede;
          font-size: 14px;
          background-color: #ffffff;
        }
      }
    }
  }
</style>

