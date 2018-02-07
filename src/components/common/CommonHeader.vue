<template>
	<div class="commonHeader">
    <a :href="url" class="return"></a>
    {{headerTitle}}
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
    props:['headerTitle','url'],
    mounted:function(){
    }
  }
</script>

<style scoped>
  .commonHeader{
    width:100%;
    height:1.2rem;
    line-height: 1.2rem;
    text-align: center;
    background:#000;
    font-size:0.36rem;
    color:#fff;
    position:relative;
  }
  .return{
    width:0.6rem;
    height:0.6rem;
    background:url("/static/images/return.png") no-repeat center;
    background-size:cover;
    position:absolute;
    left:0.2rem;
    top:50%;
    transform:translateY(-50%);
    -webkit-transform:translateY(-50%);
  }
</style>
