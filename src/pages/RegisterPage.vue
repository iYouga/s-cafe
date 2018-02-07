<template>
	<div class="registerPage">
    <!--公共头部-->
    <common-header :headerTitle="headerTitle" :url="url"></common-header>
    <!--注册表单-->
    <form action="javascript:;" class="regForm">
      <div class="restaurantName regItem">
        <label>餐厅名称</label>
        <input type="text" name="restaurantName"/>
      </div>
      <div class="restaurantCity" >
        <div class="province selectBox">
          <span>{{provinceText}}</span>
          <div class="selectList">
            <ul class="outer">
              <li v-for="(provinceItem,provinceIndex) in addressList" @click="onProvinceSelect(provinceIndex,provinceItem.text,provinceItem.children)">{{provinceItem.text}}</li>
            </ul>
          </div>
        </div>
        <div class="city selectBox">
          <span>{{defaultCity}}</span>
          <div class="selectList">
            <ul class="outer">
              <li v-for="(cityItem,cityIndex) in provinceItem" @click="onCitySelect(cityIndex,cityItem.text)">
                <span>{{cityItem.text}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="restaurantAdd regItem">
        <label>餐厅地址</label>
        <input type="text" name="restaurantAdd"/>
      </div>
      <div class="restaurantType regItem">
        <label>行业</label>
        <!--<select name="restaurantType" id="restaurantType"></select>-->
        <div id="restaurantType" class="selectBox">
          <span>餐饮</span>
          <ul class="restaurantTypeList selectList">
            <li>餐饮</li>
            <li>其他</li>
          </ul>
        </div>
      </div>
      <div class="restaurantQQ regItem">
        <label>QQ</label>
        <input type="text" name="restaurantQQ"/>
      </div>
      <div class="restaurantContact regItem">
        <label>联系人</label>
        <input type="text" name="restaurantContact"/>
      </div>
      <div class="centerCon">
        <div class="account regItem">
          <label>登录用户名</label>
          <input type="text" name="account" placeholder="请输入6-16个字母或数字"/>
        </div>
        <div class="password regItem">
          <label>登录密码</label>
          <input type="password" name="password" placeholder="请输入6-16个字母或数字"/>
        </div>
        <div class="checkPassword regItem">
          <label>登录密码</label>
          <input type="password" name="checkPassword" placeholder="请确认密码"/>
        </div>
      </div>
      <div class="phone regItem">
        <label>手机号</label>
        <input type="number" name="phone"/>
      </div>
      <div class="verifyCode regItem">
        <label>验证码</label>
        <input type="text" name="verifyCode"/>
        <input type="button" value="发送验证码" class="verifyBtn"/>
      </div>
      <div class="need regItem">
        <label>现有需求</label>
        <div class="checkList">
          <div class="needItem"><input type="checkbox" value="电子菜单"/>电子菜单</div>
          <div class="needItem"><input type="checkbox" value="网络收银台"/>网络收银台</div>
          <div class="needItem"><input type="checkbox" value="会员卡"/>会员卡</div>
          <div class="needItem"><input type="checkbox" value="优惠券"/>优惠券</div>
          <div class="needItem"><input type="checkbox" value="微信点餐"/>微信点餐</div>
        </div>
      </div>
      <div class="otherNeed regItem">
        <label>其他需求</label>
        <input type="text" name="otherNeed"/>
      </div>
      <input type="submit" class="regSub" value="提交资料"/>
    </form>
    <!--------------------------遮罩层-------------------------->
    <div class="regCover"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  import cityList from '../../static/data/data.city.js';

  //引入公共头部
  import CommonHeader from '../components/common/CommonHeader';

	export default {
    data:function(){
      return {
        headerTitle:'申请开通',
        url:'#/login',
        addressList: [],
        provinceText: '选择省份',
        defaultCity:'选择城市',
        provinceItem:[
          {
            text:'选择城市'
          }
        ]
      }
    },
    components:{
      CommonHeader
    },
    mounted:function(){
      const that = this;
      that.mainarea = true;
      that.addressList = cityList;
      //点击选择按钮出现选择列表
      $('.selectBox').click(function(event){
        event.stopPropagation();
        $('.regCover').fadeIn(200);
        $(this).find('.selectList').fadeIn(200);
      });
      //点击遮罩层隐藏选择列表
      $('.regCover').click(function(event){
        event.stopPropagation();
        $(this).fadeOut(200);
        $('.selectList').fadeOut(200);
      });
      //选择后隐藏遮罩层和列表
      $('.selectList').click(function(event) {
        event.stopPropagation();
        $('.regCover').fadeOut(200);
        $('.selectList').fadeOut(200);
        $('html').css({'overflow':'visible','height':'auto'});
        $('body').css({'overflow':'visible','height':'auto'});
      });
      //选择行业类型，显示到表单中
      $('.restaurantTypeList li').click(function(event){
        $('#restaurantType span').html($(this).html());
      });
      //弹出地址列表滑动事件阻止冒泡
      $('.selectList').scroll(function(){
        $('html').css({'overflow':'hidden','height':'100%'});
        $('body').css({'overflow':'hidden','height':'100%'});
      });
    },
    methods: {
      /*选择省份*/
      onProvinceSelect: function (index, item,provinceItem) {
        var that = this;
        that.provinceItem = provinceItem;
        that.defaultCity = provinceItem[0].text;
        that.provinceText = item;
      },
      /*选择城市*/
      onCitySelect: function (index, item) {
        var that = this;
        that.defaultCity = item;
      }
    },
    updated:function(){
      if(this.provinceText === '选择省份'){
        $('.province span').css('color','#9f9f9f');
      } else{
        $('.province span').css('color','#000');
      }
      if(this.defaultCity === '选择城市'){
        $('.city span:first').css('color','#9f9f9f');
      } else{
        $('.city span:first').css('color','#000');
      }
    }
  }
</script>

<style scoped>
  .registerPage{
    height:100vh;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
  }
  .regForm{
    flex:1;
    -webkit-flex:1;
    overflow-y: scroll;
  }
  .regItem{
    width:100%;
    height:1.05rem;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    border-bottom:1px solid #dcdcdc;
    background:#fff;
    font-size:0.28rem;
  }
  .regItem label{
    display: block;
    font-size:0.3rem;
    color:#9f9f9f;
    padding:0 0.6rem 0 0.33rem;
  }
  .regItem input{
    border:0;
    flex:1;
    -webkit-flex:1;
    /*改变光标颜色*/
    caret-color:#a5896a;
    font-size:0.3rem;
    display: block;
    height:1.05rem;
  }
  .selectBox{
    height:1.05rem;
    line-height:1.05rem;
    flex:1;
    -webkit-flex:1;
    font-size:0.3rem;
    /*border:0;
    outline: none;
    !*将默认的select选择框样式清除*!
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;*/
    background:url("/static/images/slideDown.png") no-repeat 5.2rem center;
  }
  .restaurantCity{
    display: flex;
  }
  .province,.city{
    flex:1;
    -webkit-flex:1;
    border-bottom:1px solid #d7d7d7;
  }
  .province{
    border-right:1px solid #d7d7d7;
  }
  .restaurantCity .selectBox{
    text-indent: 0.3rem;
    background:url("/static/images/slideDown.png") no-repeat 3rem center;
  }
  .selectList{
    width:6.7rem;
    max-height:calc(100% - 0.6rem);
    overflow-y: auto;
    background:#fff;
    text-indent: 0.2rem;
    border-radius:0.08rem;
    display: none;
    z-index:1;
    position:absolute;
    left:50%;
    top:50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
  .selectList li{
    font-size:0.3rem;
    line-height: 1.05rem;
  }
  .outer{
    max-height: 9999px;  /*解决字体变大问题*/
  }
  /*-------------------centerCon------------------*/
  .centerCon{
    padding:0.4rem 0;
    background:#f5f5f5;
    border-bottom:1px solid #dcdcdc;
  }
  /*设置placeholder字体颜色*/
  .regItem ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #a1a1a1;
  }
  .regItem :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #a1a1a1;
  }
  .regItem ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #a1a1a1;
  }
  .regItem :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #a1a1a1;
  }
  .account{
    border-top:1px solid #dcdcdc;
  }
  .verifyCode input{
    flex:1;
    -webkit-flex:1;
  }
  .verifyBtn{
    height:100%;
    padding:0 0.2rem;
    border:0;
    outline: none;
    background:#f5f5f5;
    color:#a1a1a1;
  }
  .need{
    height:auto;
    display: flex;
    align-items: flex-start;
    -webkit-align-items: flex-start;
  }
  .need label{
    height:1.05rem;
    line-height:1.05rem;
  }
  .checkList{
    flex:1;
    -webkit-flex:1;
    padding:0.3rem 0;
  }
  .needItem{
    display: flex;
    align-items: center;
    -webkit-align-items: center;
  }
  .needItem input{
    /*清除CheckBox默认样式*/
    -webkit-appearance:none;
    outline: none;
    width:0.48rem;
    height:0.7rem;
    flex:none;
    -webkit-flex:none;
    margin-right:0.15rem;
    background:url("/static/images/checkbox.png") no-repeat center;
  }
  .needItem input:checked{
    background:url("/static/images/checked.png") no-repeat center;
  }
  .regSub{
    width:6.45rem;
    height:1rem;
    line-height:1rem;
    margin:0.4rem auto;
    display: block;
    font-size:0.3rem;
    color:#fff;
    background:#a5896a;
    border:none;
    outline:none;
    letter-spacing:0.04rem ;
  }
  /*解决移动端按钮颜色不正常*/
  input[type=button], input[type=submit], input[type=file], button {
    cursor: pointer;
    -webkit-appearance: none;
  }
  /*--------------------遮罩层---------------------*/
  .regCover{
    width:100vw;
    height:100vh;
    background:rgba(0,0,0,0.5);
    display: none;
    position: fixed;
    top:0;
    left:0;
  }
</style>
