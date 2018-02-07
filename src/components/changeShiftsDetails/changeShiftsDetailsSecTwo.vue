<template>
  <div class="cSDSectionTwo">
    <h2 class="cSDSectionTwoTitle">统计信息</h2>
    <ul class="cSDSectionTwoDetails">
      <li>
        <i>食堂台数</i>
        <p>{{allMoney.eatNumb}}</p>
      </li>
      <li>
        <i>食堂人数</i>
        <p>{{allMoney.eatPeople}}</p>
      </li>
      <li>
        <i>食堂单数</i>
        <p>{{allMoney.eatOrder}}</p>
      </li>
      <li>
        <i>外卖单数</i>
        <p>{{allMoney.outOrder}}</p>
      </li>
      <li>
        <i>消费金额</i>
        <p>{{allMoney.lastMoney}}</p>
      </li>
      <li>
        <i>订单应收</i>
        <p>{{allMoney.mustMoney}}</p>
      </li>
      <li>
        <i>订单实收</i>
        <p>{{allMoney.trueMoney}}</p>
      </li>
      <li>
        <i>退款金额</i>
        <p>{{allMoney.elseMoney}}</p>
      </li>
      <li>
        <i>服务费用</i>
        <p>{{allMoney.serverMoney}}</p>
      </li>
      <li>
        <i>抹零金额</i>
        <p>{{allMoney.notZeroMoney}}</p>
      </li>
      <li>
        <i>挂账收入</i>
        <p>{{allMoney.nGetMoney}}</p>
      </li>
      <li>
        <i>会员充值</i>
        <p>{{allMoney.vipMoney}}</p>
      </li>
      <li>
        <i>合计</i>
        <p>{{allMoney.all}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      props:["allMoney"],
        name: "change-shifts-details-sec-two"
    }
</script>

<style scoped>

</style>
