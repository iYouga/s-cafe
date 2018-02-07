<template>
<div class="cSDSection">
  <changeShiftsDetailsSecOne :person="person"></changeShiftsDetailsSecOne>
  <changeShiftsDetailsSecTwo :allMoney="allMoney"></changeShiftsDetailsSecTwo>
</div>
</template>

<script>
  import changeShiftsDetailsSecOne from "./changeShiftsDetailsSecOne"
  import changeShiftsDetailsSecTwo from "./changeShiftsDetailsSecTwo"
    export default {
    props:["person","allMoney"],
        name: "change-shifts-deatails-section",
      components:{
        changeShiftsDetailsSecOne,
        changeShiftsDetailsSecTwo
      }
    }
</script>

<style scoped>

</style>
