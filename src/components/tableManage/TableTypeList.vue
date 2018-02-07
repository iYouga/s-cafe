<template>
	<div class="tableTypeList">
    <div class="tableTypeItem" v-for="tableType in tableTypeList">
      <item-label :label="tableType.type"></item-label>
      <table-list :tableList="tableType.tableList"></table-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ItemLabel from '../common/ItemLabel';
  import TableList from './TableList';
	export default {
    props:['tableTypeList'],
    components:{
      ItemLabel,
      TableList
    }
  }
</script>

<style scoped>
  .tableTypeList{
    flex:1;
    -webkit-flex:1;
    overflow-y: auto;
    overflow-x: hidden;
    background:#f5f5f5;
    padding-bottom:0.6rem;
  }
  .tableTypeItem{
    margin-top:0.6rem;
    position:relative;
  }
</style>
