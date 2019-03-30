<template>
  <div class="base">
    <div class="head">
      <span class="repair">汽修修资料库</span>
      <span class="iconfont icon-search"></span>
    </div>
    <div class="content-nav">
      <PublicNav/>
    </div>
    <div class="picture">
      <el-carousel :height="`${proportion*300}px`" arrow="never">
        <el-carousel-item>
          <img src="../assets/images/1.jpg" alt>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/2.jpg" alt>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/3.jpg" alt>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <PublicSystem />
    </div>
    <div class="foot">
      <span class="top-load">上拉加载更多</span>
    </div>
  </div>
</template>

<script>
  import PublicNav from "@/components/publicNav";
  import PublicSystem from "@/components/publicSystem";
  export default {
    components: {
      PublicNav,
      PublicSystem,
    },
    data() {
      return {
        proportion: 1,
        hand: [{
            book: '2013年长安福特翼虎维修手册'
          },
          {
            book: '2013年长安福特翼虎维修手册'
          },
          {
            book: '2013年长安福特翼虎维修手册'
          }, {
            book: '2013年长安福特翼虎维修手册'
          }, {
            book: '2013年长安福特翼虎维修手册'
          },
          {
            book: '2013年长安福特翼虎维修手册'
          }
        ]
      };
    },
    mounted() {
      this.getWidth();
    },
    methods: {
      getWidth() {
        const clientWidth = document.body.clientWidth;
        this.proportion = clientWidth / 750;
      }
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
    .picture {
      img {
        width: 100%;
      }
      /deep/.el-carousel {
        .el-carousel__indicators {
          .el-carousel__indicator {
            .el-carousel__button {
              width: 7px;
              height: 7px;
              background-color: #000000;
              opacity: 0.5;
              border-radius: 50%;
            }
            &.is-active {
              .el-carousel__button {
                background-color: #ffffff;
              }
            }
          }
        }
      }
    }
    .manual {
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
    .foot {
      height: 63px;
      background-color: #f1f1f1;
      text-align: center;
      .top-load {
        font-size: 12px;
        color: #999999;
        display: inline-block;
        margin-top: 30px;
      }
    }
  }
</style>

