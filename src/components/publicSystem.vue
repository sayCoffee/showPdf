<template>
  <div class="car-year">
    <div class="manual">
      <router-link 
        v-for="(item,key) in hand" 
        :key="key" 
        :to="{ path: '/material', query: { id: key+1 } }"
        tag="div"
        class="manual-lay">
        <div class="manual-content">
          <div class="book-title">{{item.book}}</div>
          <span class="size-format">大小: 14k</span>
          <span class="size-format">格式: pdf</span>
        </div>
        <div class="right-arrow">></div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
  
    },
    data() {
      return {
        hand: [
          {
            book: '2013年长安福特翼虎维修手册',
          },
          {
            book: '2013年长安福特翼虎维修手册'
          }, 
          {
            book: '2013年长安福特翼虎维修手册'
          },
          {
            book: '2013年长安福特翼虎维修手册'
          },
          {
            book: '2013年长安福特翼虎维修手册'
          },
          {
            book: '2013年长安福特翼虎维修手册'
          },
        ]
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
    .manual {
      background-color: #ffffff;
      .manual-lay {
        padding: 11px 15px 12px 15px;
        overflow: hidden;
        border-bottom: 1px solid #ededed;
        box-sizing: border-box;
        position: relative;
        .manual-content {
          float: left;
          .book-title {
            font-size: 14px;
            color: #3b3b3b;
            margin-bottom: 10px;
          }
          .size-format {
            font-size: 12px;
            color: #999999;
            margin-right: 35px;
          }
        }
        .right-arrow {
          float: right;
          position: absolute;
          top: 50%;
          right: 15px;
          margin-top: -9px;
        }
      }
    }
  }
</style>

