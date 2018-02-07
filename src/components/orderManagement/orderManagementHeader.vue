<template>
  <!-- header -->
  <div class="oMHeader">
    <div class="oMHeaderUp">
      <div class="oMHeaderOne">
        <a href="#/"><i class="iconfont icon-left2"></i>
        </a>
      </div>
      <div class="oMHeaderTwo">
        <a class="oMHeaderTwoAct" href="javascript:;">食堂订单</a>
        <a href="javascript:;">外卖订单</a>
      </div>
      <div class="oMHeaderThree">
        <a href="javascript:;"><i class="iconfont icon-sousuo"></i></a>
      </div>
    </div>
    <div class="oMHeaderDown">
      <a class="active" href="javascript:;">待处理</a>
      <a href="javascript:;">已完成</a>
      <a href="javascript:;">全部</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "order-management-header"
    }
</script>

<style scoped>

</style>
