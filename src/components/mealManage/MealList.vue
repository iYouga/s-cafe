<template>
	<div class="mealList">
    <meal-item v-for="(meal,mealIndex) in mealList" :meal="meal" :key="mealIndex"></meal-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import MealItem from './MealItem';
	export default {
    props:['mealList'],
    components:{
      MealItem
    }
  }
</script>

<style scoped>

</style>
