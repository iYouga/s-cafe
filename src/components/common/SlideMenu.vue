<template>
	<ul class="slideMenu">
    <li class="slideItem" v-for="(type,index) in slideList" @click="showSpace(index)">{{type.type}}<span v-if="index==spaceIndex"></span></li>
  </ul>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
	export default {
    props:['slideList'],
    data:function(){
      return{
        spaceIndex:0
      }
    },
    methods:{
      //通过v-if实现显示小白条
      showSpace:function(index){
        this.spaceIndex = index;
      }
    },
    mounted:function(){
      //通过jQuery实现点击显示小白条
        /*$('.slideItem').click(function(){
          $('.slideItem span').hide();
          $(this).find('span').show();
        });*/
    }
  }
</script>

<style scoped>
  .slideMenu{
    height:1rem;
    background:#000;
    display: flex;
    overflow-x: auto;
    margin-right:-0.33rem;
  }
  .slideMenu:after{
    content:".";
    display: block;
    height:0;
    width:0.33rem;
  }
  .slideItem{
    color:#fff;
    font-size:0.26rem;
    height:1rem;
    line-height: 1rem;
    text-align: center;
    margin:0 0.33rem;
    flex-shrink:0;
    -webkit-flex-shrink:0;
    position:relative;
  }
  .slideItem span{
    width:100%;
    height:0.04rem;
    background:#fff;
    position: absolute;
    bottom:0.04rem;
    left:0;
  }
</style>
