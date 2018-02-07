<template>
	<div class="workerManagePage">
    <!--------------------公共头部----------------------->
    <common-header :url="url" :headerTitle="headerTitle">
      <!-------------添加公共头部添加员工按钮-------------->
      <add-item :addLink="addLink"></add-item>
    </common-header>
    <!--------------------员工列表---------------------->
    <div class="workerList">
      <div class="worker" v-for="worker in workerList">
        <div class="workerName">{{worker.workerName}}</div>
        <div class="job">{{worker.job}}</div>
        <show-select :isShow="worker.show"></show-select>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CommonHeader from '../components/common/CommonHeader';
  import AddItem from '../components/common/AddItem';
  import ShowSelect from '../components/common/ShowSelect';
	export default {
    components:{
      CommonHeader,
      AddItem,
      ShowSelect
    },
    data:function(){
      return {
        'url':'#/setting',
        'addLink':'#/addWorker',
        'headerTitle':'员工管理',
        'workerList':[
          {
            'workerName':'老板',
            'job':'店长',
            'type':1,
            'show':true
          },
          {
            'workerName':'小小刘',
            'job':'服务员',
            'type':2,
            'show':true
          },
          {
            'workerName':'小小薛',
            'job':'服务员',
            'type':2,
            'show':false
          },
          {
            'workerName':'小小杨',
            'job':'服务员',
            'type':2,
            'show':true
          },
          {
            'workerName':'老板娘',
            'job':'收银员',
            'type':3,
            'show':true
          }
        ]
      }
    }
  }
</script>

<style scoped>
  /*-------------------圣杯布局--------------------*/
  .workerManagePage{
    height:100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
  /*------------------员工列表-------------------*/
  .workerList{
    flex:1;
    -webkit-flex:1;
    overflow-y: auto;
    padding-bottom:0.6rem;
  }
  .worker{
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    padding:0 0.4rem;
    height:1rem;
    line-height:1rem;
    border-bottom:1px solid #d8d8d8;
  }
  .workerName{
    width:4.5rem;
    font-size:0.3rem;
    color:#000;
  }
  .job{
    width:1.3rem;
    font-size:0.28rem;
    color:#888;
  }
</style>
