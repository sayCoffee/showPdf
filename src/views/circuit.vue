<template>
  <div class="car-diagram">
    <div class="diagram">电路图</div>
    <div class="diagram-content">
      <div class="diagram-list">
        <div class="electric">电气设备电路图</div>
        <div class="device">
          <div class="device-assort">其他电气设备</div>
          <div class="device-assort">门窗控制系统</div>
          <div class="device-assort">照明系统</div>
        </div>
        <div class="device">
          <div class="device-assort">视端图（线布图）</div>
          <div class="device-assort">培训教材</div>
          <div class="device-assort">案例分析</div>
        </div>
        <div class="device">
          <div class="device-assort">其他电气设备</div>
          <div class="device-assort">门窗控制系统</div>
          <div class="device-assort">照明系统</div>
        </div>
      </div>
      <div class="diagram-list">
        <div class="electric">车身系统电路图</div>
        <div class="device">
          <div class="device-assort">其他电气设备</div>
          <div class="device-assort">门窗控制系统</div>
          <div class="device-assort">照明系统</div>
        </div>
        <div class="device">
          <div class="device-assort">视端图（线布图）</div>
          <div class="device-assort">培训教材</div>
          <div class="device-assort">案例分析</div>
        </div>
        <div class="device">
          <div class="device-assort">其他电气设备</div>
          <div class="device-assort">门窗控制系统</div>
          <div class="device-assort">照明系统</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
  
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
  .car-diagram {
    .diagram {
      padding-top: 14px;
      padding-bottom: 14px;
      text-align: center;
      background-color: #ffffff;
      font-size: 17px;
      color: #3b3b3b;
    }
    .diagram-content {
      background-color: #f1f1f1;
      .diagram-list {
        padding-left: 7.5px;
        padding-right: 7.5px;
        padding-top: 15px;
        .electric {
          font-size: 14px;
          color: #666666;
          margin-left: 14px;
          display: inline-block;
          margin-bottom: 5px;
        }
        .device {
          overflow: hidden;
          display: flex;
          .device-assort {
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
  }
</style>

