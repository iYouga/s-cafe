<template>
	<div class="settingPage">
    <!--------------------------header--------------------------->
    <common-header :headerTitle="headerTitle" :url="url">
      <!--公共头部添加返回主页按钮-->
      <a href="#/" class="toHome"><img src="/static/images/home.png"/></a>
    </common-header>
    <!--------------------------设置列表-------------------------->
    <div class="settingList">
      <ul class="sectionOne section">
        <li class="settingListItem"><a href="#/meal">菜品管理</a></li>
        <li class="settingListItem"><a href="#/tableManage">桌位管理</a></li>
      </ul>
      <ul class="sectionTwo section">
        <li class="settingListItem"><a href="#/worker">员工管理</a></li>
        <li class="settingListItem"><a href="#/payway">收银方式</a></li>
      </ul>
      <ul class="sectionThree section">
        <li class="settingListItem"><a href="#/printer">打印机管理</a></li>
      </ul>
      <ul class="sectionFour section">
        <li class="settingListItem"><a href="#/userInfos">商户信息</a></li>
      </ul>
    </div>
    <!------------------------底部提示信息------------------------>
    <div class="settingFooter">
      <img src="/static/images/ts.png"/>
      <p>更全面的设置请登录电脑版<br/>www.ifoodbank.cn</p>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  //引入公共头部
  import CommonHeader from '../components/common/CommonHeader';

	export default {
    data:function(){
      return{
        headerTitle:'设置',
        url:'#/'
      }
    },
    components:{
      CommonHeader
    }
  }
</script>

<style scoped>
  .settingPage{
    background:#f5f5f5;
    height:100vh;
  }
  /*----------------公共头部添加返回主页按钮---------------*/
  .toHome{
    width:0.4rem;
    position:absolute;
    right:0.4rem;
    top:50%;
    transform:translateY(-50%);
    -webkit-transform:translateY(-50%);
  }
  .toHome img{
    width:0.4rem;
  }
  /*-----------------------设置列表----------------------*/
  .section{
    background:#fff;
    margin-top:0.4rem;
    border-bottom:1px solid #e2e2e2;
  }
  .settingListItem a{
    color:#000;
    height:1.05rem;
    line-height:1.05rem;
    font-size:0.3rem;
    text-indent: 0.3rem;
    border-top:1px solid #e2e2e2;
    background:url("/static/images/jiantou.png") no-repeat 7rem center;
  }
  /*---------------------底部提示信息--------------------*/
  .settingFooter{
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    margin-top:0.2rem;
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
