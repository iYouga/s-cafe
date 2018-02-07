<template>
	<div class="mealTypeList">
    <div class="mealTypeItem" v-for="mealType in mealTypeList">
      <item-label :label="mealType.type"></item-label>
      <meal-list :mealList="mealType.mealList"></meal-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ItemLabel from '../common/ItemLabel';
  import MealList from './MealList';
	export default {
    props:['mealTypeList'],
    components:{
      ItemLabel,
      MealList
    }
  }
</script>

<style scoped>
  .mealTypeList{
    flex:1;
    -webkit-flex:1;
    overflow-y: auto;
    overflow-x: hidden;
    background:#f5f5f5;
    padding-bottom:0.6rem;
  }
  .mealTypeItem{
    margin-top:0.6rem;
    position:relative;
  }
</style>
