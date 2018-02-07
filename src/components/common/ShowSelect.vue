<template>
  <div>
    <input type="checkbox" class="showSelect" v-model="show"/>
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
    props:['isShow'],
    data:function(){
      return{
        show:this.isShow,
        a:this.isShow,
        time:null
      }
    },
    watch:{
      show:function(nv,ov){
//        console.log('nv ' + nv);
//        console.log('ov ' + ov);
      }
    }
  }
</script>

<style scoped>
  .showSelect{
    /*清除CheckBox默认样式*/
    -webkit-appearance:none;
    outline: none;
    border:none;
    width:0.9rem;
    height:0.55rem;
    background:url("/static/images/unshow.png") no-repeat center;
    background-size:cover;
  }
  .showSelect:checked{
    background:#fff url("/static/images/show.png") no-repeat center;
    background-size:cover;
  }
</style>
