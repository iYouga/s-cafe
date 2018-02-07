<template>
	<div class="indexPage">
    <!------------------顶部banner部分------------------>
    <div class="indexBanner">
      <img src="/static/images/logo.png" alt="小付云餐厅" class="indexLogo"/>
      <div class="businessName">光明酒店</div>
      <a href="#/login" class="toLogin"><img src="/static/images/back.png" alt="小付云餐厅"/></a>
      <a href="#/setting" class="toSetting"><img src="/static/images/setting.png" alt="小付云餐厅"/></a>
    </div>
    <!------------------中间功能选择区------------------>
    <ul class="indexSelectList">
      <li class="indexselectItem">
        <a href="#">
          <img src="/static/images/dingdan.png"/>
          <p>订单管理</p>
        </a>
      </li>
      <li class="indexselectItem">
        <a href="#">
          <img src="/static/images/diancan.png"/>
          <p>点餐</p>
        </a>
      </li>
      <li class="indexselectItem">
        <a href="#">
          <img src="/static/images/waimai.png"/>
          <p>外卖</p>
        </a>
      </li>
      <li class="indexselectItem">
        <a href="#">
          <img src="/static/images/shujuxz.png"/>
          <p>菜品更新</p>
        </a>
      </li>
      <li class="indexselectItem">
        <a href="#">
          <img src="/static/images/wzwdiancan.png"/>
          <p>无桌位点餐</p>
        </a>
      </li>
      <li class="indexselectItem">
        <a href="#">
          <img src="/static/images/add_meal.png"/>
          <p>添加菜品</p>
        </a>
      </li>
      <li class="indexselectItem">
        <a href="#">
          <img src="/static/images/ic_change.png"/>
          <p>交接班</p>
        </a>
      </li>
      <li class="indexselectItem">
        <a href="#">
          <img src="/static/images/ic_analysis.png"/>
          <p>经营分析</p>
        </a>
      </li>
      <li class="indexselectItem">
        <a href="#">
          <img src="/static/images/ic_statistics.png"/>
          <p>日结统计</p>
        </a>
      </li>
    </ul>
    <!-------------------底部跳转链接------------------->
    <div class="indexFooter">
      <a href="#" class="indexFooterLink introduce">产品介绍</a>
      <a href="#" class="indexFooterLink help">帮助</a>
      <a href="#" class="indexFooterLink contact">联系我们</a>
    </div>
    <!---------------联系我们选择联系方式---------------->
    <div class="contactCover"></div>
    <div class="contactCoverCon">
      <div class="contactWay">
        <a href="#"><img src="/static/images/weixinkf.png"/><p>微信客服</p></a>
        <a href="#"><img src="/static/images/qqkf.png"/><p>QQ客服</p></a>
        <a href="#"><img src="/static/images/dianhuakf.png"/><p>电话客服</p></a>
        <a href="#"><img src="/static/images/yjfq.png"/><p>意见反馈</p></a>
      </div>
      <a href="#" class="cancel">取消</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
	export default {
    mounted:function(){
    //点击联系我们弹出选择联系方式列表
      $('.contact').click(function(){
        //显示遮盖层
        $('.contactCover').css({'z-index':'1'}).stop().animate({'opacity':'0.4'});
        $('.contactCoverCon').slideDown();
      });
    //点击取消，隐藏联系方式列表
      $('.cancel').click(function(){
        //隐藏遮盖层
        $('.contactCover').stop().animate({'opacity':'0'},function(){
          $('.contactCover').css({'z-index':'-1'})
        });
        $('.contactCoverCon').slideUp();
      });
    //点击遮盖层区域隐藏联系方式列表
      $('.contactCover').click(function(){
        //隐藏遮盖层
        $('.contactCover').stop().animate({'opacity':'0'},function(){
          $('.contactCover').css({'z-index':'-1'})
        });
        $('.contactCoverCon').slideUp();
      });
    }
  }
</script>

<style scoped>
  .indexPage{
    height:13rem;
    position:relative;
  }
  /*----------------------顶部banner部分---------------------*/
  .indexBanner{
    width:100%;
    height:4.16rem;
    position:relative;
    background:url("/static/images/i-banner-bg.jpg") no-repeat center;
    background-size:cover;
    -webkit-background-size:cover;
  }
  .indexLogo{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%);
    -webkit-transform:translate(-50%);
    width:3.5rem;
  }
  .businessName{
    width:100%;
    height:0.7rem;
    line-height:0.7rem;
    font-size:0.32rem;
    color:#fff;
    position:absolute;
    bottom:0;
    left:0;
    text-indent: 0.3rem;
    background:rgba(255,255,255,0.3);
  }
  .toLogin{
    position:absolute;
    top:0.63rem;
    left:0.62rem;
  }
  .toSetting{
    position:absolute;
    top:0.63rem;
    right:0.62rem;
  }
  .toLogin img,.toSetting img{
    width:0.6rem;
  }
  /*--------------------中间功能选择区------------------*/
  .indexSelectList{
    padding:0 1.1rem;
    display: flex;
    display: -webkit-flex;
    justify-content:space-around;
    -webkit-justify-content:space-between;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
  }
  .indexselectItem{
    width:33.33%;
  }
  .indexselectItem img{
    width:0.94rem;
    height:0.94rem;
    margin:0.35rem auto 0.1rem;
  }
  .indexselectItem p{
    font-size:0.26rem;
    color:#ccc;
    text-align: center;
  }
  /*--------------------底部跳转链接----------------------*/
  .indexFooter{
    width:100%;
    display: flex;
    display: -webkit-flex;
    position:absolute;
    bottom:0.3rem;
    left:0;
  }
  .indexFooterLink{
    flex:1;
    -webkit-flex:1;
    font-size:0.26rem;
    color:#696969;
    line-height:0.54rem;
    text-align: center;
    text-indent: 0.74rem;
  }
  .introduce{
    background: url("/static/images/chanpin.png") no-repeat 0.5rem center;
    background-size:0.41rem 0.41rem;
  }
  .help{
    background: url("/static/images/bangzhu.png") no-repeat 0.5rem center;
    background-size:0.41rem 0.41rem;
  }
  .contact{
    background: url("/static/images/lianxi.png") no-repeat 0.5rem center;
    background-size:0.44rem 0.35rem;
  }
  /*---------------联系我们选择联系方式----------------*/
  /*上层半透明遮盖层*/
  .contactCover{
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background: #000;
    opacity: 0;
    z-index: -1;
    /*display: none;*/
  }
  .contactCoverCon{
    width:100%;
    position:fixed;
    bottom:0;
    left:0;
    z-index: 1;
    background:#fff;
    display: none;
  }
  .contactWay{
    padding:0.7rem 0;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-justify-content: space-around;
  }
  .contactWay img{
    width:0.8rem;
    margin:0 auto 0.2rem;
  }
  .contactWay p{
    font-size:0.26rem;
    color:#000;
  }
  .cancel{
    height:1rem;
    line-height:1rem;
    font-size:0.26rem;
    color:#000;
    text-align: center;
    border-top:1px solid #c7c7c7;
  }
</style>
