<template>
  <div class="cSDSectionOne">
    <changeShiftsDetailsSecTitle :person="person"></changeShiftsDetailsSecTitle>
  </div>
</template>

<script>
  import changeShiftsDetailsSecTitle from "../changeShiftsDetails/changeShiftsDetailsSecTitle"
    export default {
      props:["person"],
        name: "change-shifts-all-records-details-sec-one",
      components:{
        changeShiftsDetailsSecTitle
      }
    }
</script>

<style scoped>

</style>
