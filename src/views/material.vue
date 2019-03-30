<template>
  <div class="material-content">
    <div class="car-content">汽修资料库</div>
    <div class="handbook">
      <pdf src="../../assets/ES6.pdf"></pdf>
    </div>
  </div>
</template>

<script>
  import pdf from 'vue-pdf';
  export default {
    components: {
      pdf,
    },
    data() {
      return {}
    },
    mounted() {
  
    },
    methods: {
  
    }
  };
</script>

<style lang="scss" scoped>
  .material-content {
    background-color: #ffffff;
    height: 100%;
    .car-content {
      font-size: 17px;
      color: #3b3b3b;
      text-align: center;
      padding-top: 14px;
      padding-bottom: 14px;
      border-bottom: 1px solid #ededed;
    }
    .handbook {
      
    }
      
  }
</style>

