<template>
	<div class="paywayManagePage">
    <!----------------------公共头部------------------------>
    <common-header :url="url" :headerTitle="headerTitle">
      <!-------------添加公共头部添加收银方式按钮-------------->
      <add-item :addLink="addLink"></add-item>
    </common-header>
    <div class="paywayList">
      <!-------------------系统默认收银方式------------------->
      <div class="defaultPayway">
        <item-label :label="defaultPayway.type"></item-label>
        <span v-for="payway in defaultPayway.payway">{{payway}}</span>
      </div>
      <!-------------------自定义收银方式--------------------->
      <div class="definePayway">
        <item-label :label="definePayway.type"></item-label>
        <div class="definePaywayItem" v-for="payway in definePayway.payway">
          <div class="paywayName">{{payway.paywayName}}</div>
          <div class="paywayCode">{{payway.paywayCode}}</div>
          <div class="paywaySort">排序：{{payway.sort}}</div>
          <show-select :isShow="payway.show"></show-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CommonHeader from '../components/common/CommonHeader';
  import AddItem from '../components/common/AddItem';
  import ItemLabel from '../components/common/ItemLabel';
  import ShowSelect from '../components/common/ShowSelect';
	export default {
    components:{
      CommonHeader,
      AddItem,
      ItemLabel,
      ShowSelect
    },
    data:function(){
      return {
        'url':'#/setting',
        'addLink':'#/addPayway',
        'headerTitle':'收银方式管理',
        'defaultPayway':{
          'type':'系统默认',
          'payway':['刷卡','现金','商户微信','会员卡','钱包','银联支付','签单','免单']
        },
        'definePayway': {
          'type':'自定义',
          'payway':[
            {
              'paywayName':'支付宝',
              'paywayCode':'zfb',
              'sort':'0',
              'show':true
            },
            {
              'paywayName':'微信',
              'paywayCode':'wx',
              'sort':'1',
              'show':true
            },
            {
              'paywayName':'QQ',
              'paywayCode':'QQ',
              'sort':'2',
              'show':true
            },
            {
              'paywayName':'小付钱包',
              'paywayCode':'xfqb',
              'sort':'3',
              'show':true
            },
            {
              'paywayName':'百度钱包',
              'paywayCode':'bdqb',
              'sort':'4',
              'show':false
            },
            {
              'paywayName':'翼支付',
              'paywayCode':'yzf',
              'sort':'5',
              'show':false
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .paywayManagePage{
    height:100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
  .paywayList{
    flex:1;
    -webkit-flex:1;
    overflow-y: auto;
    background:#f5f5f5;
  }
  .defaultPayway{
    position:relative;
    margin-top:0.6rem;
    background:#fff;
    height:2.34rem;
    border:1px solid #d7d7d7;
    padding:0 0.36rem;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    align-content: center;
    -webkit-align-content: center;
  }
  .defaultPayway span{
    display: block;
    height:0.5rem;
    line-height:0.5rem;
    font-size:0.26rem;
    color:#000;
    border:1px solid #9b9b9b;
    border-radius:0.22rem;
    padding:0 0.3rem;
    margin:0.13rem 0.1rem 0.13rem 0;
  }
  .definePayway{
    position:relative;
    margin:0.6rem 0;
    border-top:1px solid #d7d7d7;
  }
  .definePaywayItem{
    padding:0 0.4rem;
    height:1rem;
    background:#fff;
    border-bottom:1px solid #d7d7d7;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
  }
  .paywayName{
    flex:1;
    -webkit-flex:1;
    color:#000;
    font-size:0.28rem;
  }
  .paywayCode{
    flex:1;
    -webkit-flex:1;
    color:#0992fd;
    font-size:0.26rem;
  }
  .paywaySort{
    flex:1;
    -webkit-flex:1;
    color:#8a8a8a;
    font-size:0.26rem;
  }
</style>
