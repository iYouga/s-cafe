<template>
	<div class="printerManagePage">
    <!--------------------------header--------------------------->
    <common-header :headerTitle="headerTitle" :url="url">
      <!--公共头部添加返回主页按钮-->
      <a href="#/" class="toHome"><img src="/static/images/home.png"/></a>
    </common-header>
    <!-----------------------打印机设置列表---------------------->
    <ul class="printerSetting">
      <li class="printerSettingItem"><a href="#">蓝牙打印机</a></li>
      <li class="printerSettingItem"><a href="#">网络打印机</a></li>
      <li class="printerSettingItem"><a href="#">打印小票设置</a></li>
      <li class="printerSettingItem">
        <a href="#" class="paper">纸张宽度设置
          <input type="checkbox" class="paperWidth"/>
        </a>
      </li>
      <li class="printerSettingItem"><a href="#">打印帮助</a></li>
    </ul>
    <!------------------------打印测试按钮-------------------->
    <input type="button" class="testBtn"  value="打印测试"/>
  </div>
</template>

<script type="text/ecmascript-6">
  //引入公共头部
  import CommonHeader from '../components/common/CommonHeader';
	export default {
    data:function(){
      return{
        headerTitle:'打印机管理',
        url:'#/setting'
      }
    },
    components:{
      CommonHeader
    }
  }
</script>

<style scoped>
  /*-----------------------圣杯布局---------------------*/
  .printerManagePage{
    height:100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
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
  /*----------------------打印机设置列表------------------*/
  .printerSetting{
    flex:1;
    -webkit-flex:1;
    overflow-y: auto;
    border-top:1px solid #d7d7d7;
  }
  .printerSetting li a{
    height:1rem;
    line-height:1rem;
    font-size:0.28rem;
    color:#000;
    padding:0 0.4rem;
    border-bottom:1px solid #d7d7d7;
    background:url("/static/images/jiantou.png") no-repeat 7rem center;
  }
  .printerSetting .paper{
    background:none;
    position:relative;
  }
  .paperWidth{
    /*清除CheckBox默认样式*/
    -webkit-appearance:none;
    outline: none;
    border:none;
    width:0.9rem;
    height:0.55rem;
    background:url("/static/images/58.png") no-repeat center;
    background-size:cover;
    position:absolute;
    right:0.3rem;
    top:50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }
  .paperWidth:checked{
    background:#fff url("/static/images/80.png") no-repeat center;
    background-size:cover;
  }
  /*----------------------打印测试按钮------------------*/
  .testBtn{
    display: block;
    width:6.3rem;
    height:0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size:0.26rem;
    color:#fff;
    margin:0 auto 0.6rem;
    background:#a5896a;
    outline: none;
    border:none;
    letter-spacing: 0.04rem;
  }
  /*解决移动端按钮颜色不正常*/
  input[type=button], input[type=submit], input[type=file], button {
    cursor: pointer;
    -webkit-appearance: none;
  }
</style>
