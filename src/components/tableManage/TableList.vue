<template>
	<div class="tableList">
    <table-item v-for="(table,tableIndex) in tableList" :table="table" :key="tableIndex"></table-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import TableItem from './TableItem';
	export default {
    props:['tableList'],
    components:{
      TableItem
    }
  }
</script>

<style scoped>

</style>
