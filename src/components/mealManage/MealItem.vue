<template>
	<div class="mealItem">
    <a href="#/mealEdit" class="mealItemLink">
      <img src="" v-lazy="meal.imgUrl"/>
      <div class="mealInfo">
        <p class="mealTitle">{{meal.mealTitle}}</p>
        <p class="mealPrice"><span>{{meal.mealPrice}}</span>元/{{meal.unit}}</p>
      </div>
      <show-select :isShow="meal.show"></show-select>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  import ShowSelect from '../common/ShowSelect';
	export default {
    props:['meal'],
    components:{
      ShowSelect
    }
  }
</script>

<style scoped>
  .mealItem{
    border-top:1px solid #d8d8d8;
  }
  .mealItemLink{
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    background:#fff;
    padding:0.17rem 0.4rem;
  }
  .mealItemLink img{
    width:1.32rem;
    height:1.32rem;
  }
  .mealInfo{
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    flex:1;
    -webkit-flex:1;
    padding-left:0.6rem;
  }
  .mealTitle{
    font-size:0.3rem;
    color:#000;
  }
  .mealPrice{
    font-size:0.24rem;
    color:#939393;
  }
  .mealPrice span {
    color: #2e9aeb;
  }
</style>
