<template>
  <div class="finishOrderDetails">
    <commonYHeader :oDHeader="oDHeader"></commonYHeader>
    <orderDetailsSec></orderDetailsSec>
    <finishOrderDetailsFooter></finishOrderDetailsFooter>
  </div>
</template>

<script>
  import commonYHeader from "../components/common/commonYHeader"
  import orderDetailsSec from "../components/orderDetails/orderDetailsSec"
  import finishOrderDetailsFooter from "../components/orderDetails/finishOrderDetailsFooter"
  import "../../static/css/orderDetails.css"
  let url=require("url");
    export default {
        name: "finish-order-details",
      data(){
          return{
            oDHeader:{
              "title":"桌位x",
              "rIcon":"iconfont icon-shuaxin"
            }
          }
      },
      mounted:function(){
          console.log(url);
          this.oDHeader.title=url.id
      },
      components:{
        commonYHeader,
        orderDetailsSec,
        finishOrderDetailsFooter
      }
    }
</script>

<style scoped>
.finishOrderDetails{
  flex:1;
  -webkit-flex:1;
  display: flex;
  flex-direction: column;
}
</style>
