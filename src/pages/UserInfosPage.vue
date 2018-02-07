<template>
	<form class="userInfosPage">
    <!--公共头部-->
    <common-header :headerTitle="headerTitle" :url="url">
      <!------------------新增公共头部完成按钮--------------------->
      <input type="submit" class="userInfosSub" value="完成"/>
    </common-header>
    <!------------------------商户信息列表------------------------>
    <div class="userInfosList">
      <div class="userInfos">
        <div class="restaurantName regItem">
          <label>餐厅名称</label>
          <input type="text" name="restaurantName" placeholder="输入餐厅名称"/>
        </div>
        <div class="restaurantContact regItem">
          <label>联系人</label>
          <input type="text" name="restaurantContact" placeholder="输入联系人"/>
        </div>
        <div class="phone regItem">
          <label>联系电话</label>
          <input type="number" name="phone" placeholder="输入联系电话"/>
        </div>
        <div class="restaurantAdd regItem">
          <label>地址</label>
          <input type="text" name="restaurantAdd" placeholder="输入店铺地址"/>
        </div>
      </div>

      <div class="selectList">
        <div class="isOrderMeal regItem">
          <label>允许点餐</label>
          <input type="radio" name="isOrderMeal" value="是" checked/>是
          <input type="radio" name="isOrderMeal" value="否" class="isFalse"/>否
        </div>
        <div class="isTakeOut regItem">
          <label>是否外卖</label>
          <input type="radio" name="isTakeOut" value="是" checked/>是
          <input type="radio" name="isTakeOut" value="否" class="isFalse"/>否
        </div>
      </div>
    </div>
  </form>
</template>

<script type="text/ecmascript-6">
  //引入公共头部
  import CommonHeader from '../components/common/CommonHeader';
	export default {
    data:function(){
      return{
        headerTitle:'商户信息管理',
        url:'#/setting'
      }
    },
    components:{
      CommonHeader
    },

  }
</script>

<style scoped>
  /*-----------------------圣杯布局---------------------*/
  .userInfosPage{
    height:100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
  /*---------------公共头部完成按钮--------------*/
  .userInfosSub{
    font-size:0.28rem;
    color:#fff;
    outline:none;
    border:none;
    background:none;
    position:absolute;
    right:0.4rem;
    top:50%;
    transform:translateY(-50%);
    -webkit-transform:translateY(-50%);
  }
  /*---------------商户信息列表--------------*/
  .userInfosList{
    flex:1;
    -webkit-flex:1;
    overflow-y: auto;
    background:#f5f5f5;
  }
  .userInfos{
    margin:0.4rem 0;
    background:#fff;
    border-top:1px solid #dcdcdc;
  }
  .regItem{
     height:1.05rem;
     display: flex;
     align-items: center;
     -webkit-align-items: center;
     border-bottom:1px solid #dcdcdc;
     font-size:0.26rem;
    padding:0 0.2rem;
   }
  .regItem label{
    width:1.3rem;
    display: block;
    font-size:0.28rem;
    color:#9f9f9f;
    padding:0 0.6rem 0 0.33rem;
  }
  .regItem input{
    border:0;
    /*改变光标颜色*/
    caret-color:#a5896a;
    font-size:0.3rem;
    display: block;
    height:1.05rem;
  }
  /*设置placeholder字体颜色*/
  .regItem ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #a1a1a1;
    font-size:0.28rem;
  }
  .regItem :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #a1a1a1;
    font-size:0.28rem;
  }
  .regItem ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #a1a1a1;
    font-size:0.28rem;
  }
  .regItem :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #a1a1a1;
    font-size:0.28rem;
  }

  .selectList{
    background:#fff;
    border-top:1px solid #dcdcdc;
  }
  input[type="radio"]{
    -webkit-appearance:none;
    width:0.26rem;
    height:0.26rem;
    background:url("/static/images/false.png") no-repeat center;
    background-size:cover;
    margin-right:0.2rem;
  }
  input[type="radio"]:checked{
    background:url("/static/images/true.png") no-repeat center;
    background-size:cover;
  }
  .isFalse{
    margin-left:1rem;
  }
</style>
