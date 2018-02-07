<template>
	<div class="mealEditPage">
    <!----------------------公共头部---------------------->
    <common-header :url="url" :headerTitle="headerTitle"></common-header>
    <!---------------------菜品信息部分-------------------->
    <form class="mealInfos">
      <img src="" class="mealImg" v-lazy="mealInfos.imgUrl"/>
      <div class="inputBox">
        <div><input class="mealInfosItem mealTitle" type="text" placeholder="添加菜品名称" :value="mealInfos.mealTitle"/></div>
        <div><input class="mealInfosItem mealCode" type="text" placeholder="快查编码（菜名首字母）" :value="mealInfos.mealCode"/></div>
        <div><input class="mealInfosItem mealPrice" type="text" placeholder="请输入价格" :value="mealInfos.mealPrice"/></div>
        <div><input class="mealInfosItem mealType" type="text" placeholder="请输入菜品分类" :value="mealInfos.mealType"/></div>
        <div><input class="mealInfosItem mealUnit" type="text" placeholder="请输入菜品单位（如：份）" :value="mealInfos.unit"/></div>
      </div>
      <input type="submit" value="删除" class="deleteMeal"/>
      <input type="submit" value="确认" class="confirm"/>
      <!------------------------底部提示信息------------------------>
      <div class="settingFooter">
        <img src="/static/images/ts.png"/>
        <p>更全面的设置请登录电脑版<br/>www.ifoodbank.cn</p>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import CommonHeader from '../common/CommonHeader';

	export default {
    components:{
      CommonHeader
    },
    data:function(){
      return {
        url:'#/meal',
        headerTitle:'编辑菜品',
        mealInfos:
          {
            'mealId':'01',
            'imgUrl':'/static/images/meal/meal01.jpg',
            'mealTitle':'素拼',
            'mealCode':'s',
            'mealPrice':10.00,
            'mealType':'凉菜',
            'unit':'份',
            'show':true
          }
      }
    }
  }
</script>

<style scoped>
  /*-------------------圣杯布局--------------------*/
  .mealEditPage{
    height:100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
  .mealInfos{
    flex:1;
    -webkit-flex:1;
    overflow-y: auto;
    background:#f5f5f5;
  }
  .mealImg{
    margin:0.4rem auto;
    width:6.65rem;
    height:5.1rem;
  }
  .inputBox{
    background:#fff;
    border-bottom:1px solid #d7d7d7;
    /*margin-bottom:0.6rem;*/
  }
  .inputBox div{
    border-top:1px solid #d7d7d7;
  }
  .mealInfosItem{
    width:100%;
    box-sizing: border-box;
    display: block;
    height:1rem;
    line-height:1rem;
    font-size:0.28rem;
    outline: none;
    border:none;
    padding:0 0.3rem;
    text-indent: 0.65rem;
  }
  .mealTitle{
    background:url("/static/images/tjcpm.png") no-repeat 0.3rem center;
  }
  .mealCode{
    background:url("/static/images/kcbm.png") no-repeat 0.3rem center;
  }
  .mealPrice{
    background:url("/static/images/jg.png") no-repeat 0.3rem center;
  }
  .mealType,.mealUnit{
    background:url("/static/images/tjfl.png") no-repeat 0.3rem center;
  }
  input[type="submit"]{
    display: block;
    font-size:0.3rem;
    color:#fff;
    background:#a5896a;
    border:none;
    outline:none;
    letter-spacing:0.2rem;
  }
  .deleteMeal{
    width:6.8rem;
    height:0.8rem;
    line-height:0.8rem;
    margin:0.2rem auto;
  }
  .confirm{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:0.9rem;
  }
  /*解决移动端按钮颜色不正常*/
  input[type=button], input[type=submit], input[type=file], button {
    cursor: pointer;
    -webkit-appearance: none;
  }

  /*---------------------底部提示信息--------------------*/
  .settingFooter{
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    margin:0.2rem 0 1.1rem;
  }
  .settingFooter img{
    width:0.48rem;
    height:0.48rem;
    margin:0.2rem;
  }
  .settingFooter p{
    font-size:0.26rem;
    color:#909090;
    letter-spacing: 0.02rem;
    margin-left:0.1rem;
  }
</style>
