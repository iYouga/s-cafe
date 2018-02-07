<template>
  <div class="cSDSection">
    <changeShiftsAllRecordsDetailsSecOne :person="person"></changeShiftsAllRecordsDetailsSecOne>
    <changeShiftsDetailsSecTwo :allMoney="allMoney"></changeShiftsDetailsSecTwo>
  </div>
</template>
<script>
  import changeShiftsAllRecordsDetailsSecOne from "./changeShiftsAllRecordsDetailsSecOne"
  import changeShiftsDetailsSecTwo from "../changeShiftsDetails/changeShiftsDetailsSecTwo"
  export default {
    props:["person","allMoney"],
    name: "change-shifts-details-section",
    components:{
      changeShiftsAllRecordsDetailsSecOne,
      changeShiftsDetailsSecTwo
    },
  }

</script>

<style scoped>

</style>
