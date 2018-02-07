<template>
	<div class="loginPage">
    <!----------------------header------------------------->
    <div class="header">小付点餐</div>
    <img src="/static/images/login-logo.png" alt="小付点餐" class="loginLogo"/>
    <!---------------------登录表单------------------------->
    <form action="javascript:;" class="loginForm">
      <div class="businessId loginInput"><input type="text" placeholder="商户号" name="businessId"/></div>
      <div class="account loginInput"><input type="text" placeholder="账号" name="account"/></div>
      <div class="password loginInput"><input type="password" placeholder="密码" name="password"/></div>
      <input type="submit" value="登录" class="loginSub"/>
      <div class="loginLinkBtn">
        <a href="#" class="tryout">我想体验</a>
        <a href="#/reg" class="register">申请开通</a>
      </div>
    </form>
    <!---------------------弹出信息提示框--------------------->
    <div class="info">请输入商户号</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
	export default {
    mounted:function(){
      /*显示提示信息函数*/
      function showInfo (info){
        $('.info').show().html(info).addClass('infoUp').delay(2000).fadeOut('fast',function(){
          $('.info').removeClass('infoUp').html('');
        });
      }
      /*登录验证*/
      $('.loginSub').click(function(){
        if($('.businessId input').val() === ''){
          showInfo ('请输入商户号');
          return false;
        }
        if($('.account input').val() === ''){
          showInfo ('请输入账号');
          return false;
        }
        if($('.password input').val() === ''){
          showInfo ('请输入密码');
          return false;
        }
      });
    }
  }
</script>

<style scoped>
  .loginPage{
    /*height:13rem;*/
    overflow-y: auto;
    padding-bottom:0.6rem;
  }
  /*------------------------header------------------------*/
  .header{
    width:100%;
    height:1.2rem;
    line-height: 1.2rem;
    text-align: center;
    background:#000;
    font-size:0.36rem;
    color:#fff;
  }
  .loginLogo{
    width:3.44rem;
    margin:0.46rem 2.03rem 0.1rem;
  }
  /*-----------------------登录表单----------------------*/
  .loginForm{
    padding:0 0.63rem;
  }
  .loginInput{
    border-bottom:1px solid #eee;
  }
  .loginInput input {
    height:0.8rem;
    line-height:0.8rem;
    margin-top:0.2rem;
    text-indent:0.63rem;
    font-size:0.26rem;
    color:#000;
    border:0;
    /*改变光标颜色*/
    caret-color:#a5896a;
    -webkit-caret-color:#a5896a;
  }
  .businessId input{
    background:url("/static/images/businessId.png") no-repeat left center;
    background-size:0.4rem;
  }
  .account input{
    background:url("/static/images/account.png") no-repeat left center;
    background-size:0.4rem;
  }
  .password input{
    background:url("/static/images/password.png") no-repeat left center;
    background-size:0.4rem;
  }
  .loginInput ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #a1a1a1;
  }
  .loginInput :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #a1a1a1;
  }
  .loginInput ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #a1a1a1;
  }
  .loginInput :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #a1a1a1;
  }
  .loginSub{
    width:100%;
    height: 1rem;
    line-height: 1rem;
    border:0;
    background:#a5896a;
    color:#fff;
    font-size:0.3rem;
    display: block;
    margin:0.4rem 0;
  }
  .loginLinkBtn{
    width:100%;
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
  .loginLinkBtn a{
    width:3.03rem;
    height:0.77rem;
    line-height:0.77rem;
    text-align: center;
    font-size:0.26rem;
    color:#a5896a;
    border:1px solid #a5896a;
  }
  /*解决移动端按钮颜色不正常*/
  input[type=button], input[type=submit], input[type=file], button {
    cursor: pointer;
    -webkit-appearance: none;
  }
  /*----------------------弹出信息提示框----------------------*/
  .info{
    position:fixed;
    bottom:-1rem;
    left:50%;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -o-transform: translate(-50%);
    transform: translate(-50%);
    width:2rem;
    height:0.8rem;
    line-height:0.8rem;
    text-align: center;
    font-size:0.24rem;
    color:#fff;
    background:rgba(0,0,0,0.8);
    border-radius:0.1rem;
    transition:all 0.2s;
  }
  .infoUp{
    bottom:0.9rem;
  }
</style>
