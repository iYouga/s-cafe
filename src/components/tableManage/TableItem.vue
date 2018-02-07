<template>
	<div class="tableItem">
      <div class="tableInfo">
        <p class="tableTitle">{{table.tableTitle}}</p>
        <p class="tableTitleOther">{{table.tableTitleOther}}</p>
      </div>
      <div class="tableInfo tableInfoRight">
        <p class="people">{{table.people}}人</p>
        <show-select :isShow="table.show"></show-select>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  import ShowSelect from '../common/ShowSelect';
	export default {
    props:['table'],
    components:{
      ShowSelect
    }
  }
</script>

<style scoped>
  .tableItem{
    height:1.09rem;
    line-height: 1.09rem;
    border-top:1px solid #d8d8d8;
    padding:0 0.4rem;
    background:#fff;
    display: flex;
  }
  .tableInfo{
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    flex:1;
    -webkit-flex:1;
  }
  .tableInfoRight{
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
  }
  .tableTitle{
    font-size:0.26rem;
    color:#000;
  }
  .tableTitleOther{
    font-size:0.24rem;
    color:#888;
    margin-left:1rem;
  }
  .people{
    font-size:0.24rem;
    color:#0683e1;
    margin-right:1.1rem;
  }
</style>
