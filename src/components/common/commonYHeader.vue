<template>
  <div class="oFHeader">
    <a href="jacascript:;"><i class="iconfont icon-left2"></i></a>
    <a href="jacascript:;">{{oDHeader.title}}</a>
    <a href="jacascript:;"><i v-bind:class="oDHeader.rIcon"></i></a>
  </div>
</template>

<script>
    export default {
        name: "common-header",
      props:["oDHeader"]
    }
</script>

<style scoped>
  .oFHeader {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    height: 1.1rem;
    background: #000;
    align-items: center; }
  .oFHeader a {
    display: block;
    color: #fff;
    font-size: 0.5rem;
  }
  .oFHeader a i {
    display: block;
    color: #fff;
    font-size: 0.5rem; }
  .oFHeader a:nth-child(1) {
    padding-left: 0.25rem; }
  .oFHeader a:nth-child(2) {
    font-size: 0.32rem; }
  .oFHeader a:nth-child(3) {
    padding-right: 0.25rem; }
</style>
