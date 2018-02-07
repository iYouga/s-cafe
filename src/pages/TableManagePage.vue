<template>
	<div class="tableManagePage">
    <!-----------------------公共头部--------------------->
    <common-header :url="url" :headerTitle="headerTitle">
      <!----------------添加公共头部添加桌位按钮------------>
      <add-item :addLink="addLink"></add-item>
    </common-header>
    <!----------------------slideMenu----------------------->
    <slide-menu :slideList="tableTypeList"></slide-menu>
    <!-----------------------桌位列表------------------------>
    <table-manage-list :tableTypeList="tableTypeList"></table-manage-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import CommonHeader from '../components/common/CommonHeader';
  import AddItem from '../components/common/AddItem';
  import SlideMenu from '../components/common/SlideMenu';
  import TableManageList from '../components/tableManage/TableTypeList';

	export default {
    components:{
      CommonHeader,
      AddItem,
      SlideMenu,
      TableManageList
    },
    data:function(){
      return{
        'headerTitle':'桌位管理',
        'url':'#/setting',
        'addLink':'#/addTable',
        'tableTypeList':[
          {
            'type':'大厅',
            'tableList':[
              {
                'tableTitle':'01',
                'tableTitleOther':'01',
                'people':'4',
                'show':true
              },
              {
                'tableTitle':'02',
                'tableTitleOther':'02',
                'people':'4',
                'show':true
              },
              {
                'tableTitle':'03',
                'tableTitleOther':'03',
                'people':'6',
                'show':true
              }
            ]
          },
          {
            'type':'大厅雅座区',
            'tableList':[
              {
                'tableTitle':'04',
                'tableTitleOther':'04',
                'people':'4',
                'show':false
              },
              {
                'tableTitle':'05',
                'tableTitleOther':'05',
                'people':'2',
                'show':true
              },
              {
                'tableTitle':'06',
                'tableTitleOther':'06',
                'people':'2',
                'show':false
              }
            ]
          },
          {
            'type':'包厢',
            'tableList':[
              {
                'tableTitle':'07',
                'tableTitleOther':'07',
                'people':'8',
                'show':true
              },
              {
                'tableTitle':'08',
                'tableTitleOther':'08',
                'people':'8',
                'show':false
              },
              {
                'tableTitle':'09',
                'tableTitleOther':'09',
                'people':'10',
                'show':true
              }
            ]
          },
          {
            'type':'二楼包厢',
            'tableList':[
              {
                'tableTitle':'10',
                'tableTitleOther':'春',
                'people':'8',
                'show':false
              },
              {
                'tableTitle':'11',
                'tableTitleOther':'夏',
                'people':'12',
                'show':true
              },
              {
                'tableTitle':'12',
                'tableTitleOther':'秋',
                'people':'10',
                'show':true
              },
              {
                'tableTitle':'13',
                'tableTitleOther':'冬',
                'people':'8',
                'show':false
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  /*-------------------圣杯布局--------------------*/
  .tableManagePage{
    height:100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
</style>
