<template>
  <div class="cSDSectionOne">
    <changeShiftsDetailsSecTitle :person="person"></changeShiftsDetailsSecTitle>
    <ul class="cSDSectionOneDetails">
      <li><span>收银方式</span><span>实缴金额</span></li>
      <li><span>【555】现金</span><span>888.00</span></li>
      <li><span>【CASH】现金</span><span>520.00</span></li>
      <li><span>【FREE】免单</span><span>0.00</span></li>
      <li><span>【WX】微信</span><span>1111.00</span></li>
      <li><span>【ZFB】支付宝</span><span>999.00</span></li>
    </ul>
  </div>
</template>

<script>
  import changeShiftsDetailsSecTitle from "./changeShiftsDetailsSecTitle"
    export default {
    props:["person"],
        name: "change-shifts-details-sec-one",
      components:{
        changeShiftsDetailsSecTitle
      }
    }
</script>

<style scoped>

</style>
