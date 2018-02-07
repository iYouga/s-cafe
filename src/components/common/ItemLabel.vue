<template>
  <div class="label">{{label}}<img src="/static/images/biaoqian.png"/></div>
</template>

<script type="text/ecmascript-6">
	export default {
    props:['label']
  }
</script>

<style scoped>
  .label{
    position:absolute;
    left:0;
    top:-0.4rem;
    z-index:2;
    height:0.4rem;
    line-height:0.4rem;
    padding:0 0.2rem;
    font-size:0.24rem;
    color:#fff;
    background:#848484;
  }
  .label img{
    height:0.4rem;
    position:absolute;
    right:-0.05rem;
    top:0;
    z-index:-1;
  }
</style>
