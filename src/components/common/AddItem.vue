<template>
  <a :href="addLink" class="addItem"><img src="/static/images/tj.png"/></a>
</template>

<script type="text/ecmascript-6">
	export default {
    props:['addLink']
  }
</script>

<style scoped>
  .addItem{
    width:0.4rem;
    position:absolute;
    right:0.4rem;
    top:50%;
    transform:translateY(-50%);
    -webkit-transform:translateY(-50%);
  }
  .addItem img{
    width:0.4rem;
  }
</style>
