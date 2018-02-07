<template>
  <!-- <section></section> -->
  <div class="aMSection">
    <div class="aMSectionPhoto">
      <i class="iconfont icon-photo1"></i>
      <p>添加一张菜品图</p>
    </div>
    <form class="aMSectionWriteMsg" action="">
      <input type="text" placeholder="添加菜品名称"/>
      <input type="text" placeholder="快插编码（菜名首字母）"/>
      <input type="text" placeholder="请输入价格"/>
      <input type="text" placeholder="添加菜品分类"/>
      <input type="text" placeholder="请输入菜品单位（如：份）"/>
    </form>
    <div class="aMSectionGoPc">
      <p>更全面的菜品设置请登录电脑版</p>
      <p>ishiku.cn/xd</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "add-meal-sec"
    }
</script>

<style scoped>

</style>
