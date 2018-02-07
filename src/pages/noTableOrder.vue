<template>
  <div class="noTableOrder">
    <noTableOrderHeader></noTableOrderHeader>
    <noTableOrderSec></noTableOrderSec>
    <noTableOrderFooter></noTableOrderFooter>
    <noTableOrderPositionAside></noTableOrderPositionAside>
  </div>
</template>

<script>
  import noTableOrderHeader from "../components/noTableOrder/noTableOrderHeader"
  import noTableOrderSec from "../components/noTableOrder/noTableOrderSec"
  import noTableOrderFooter from "../components/noTableOrder/noTableOrderFooter"
  import noTableOrderPositionAside from "../components/noTableOrder/noTableOrderPositionAside"
  import "../../static/css/noTableOrder.css"
    export default {
        name: "no-table-order",
      components:{
        noTableOrderHeader,
        noTableOrderSec,
        noTableOrderFooter,
        noTableOrderPositionAside
      },
      mounted:function(){
        $(".nTOHederUp i").click(function(){
          location.href="#/"
        })
        $('.nTOHederDownMove a').click(function(){
          $(this).attr("class","nTOHederDownMoveActive").siblings().removeAttr("class","nTOHederDownMoveActive")
        })
        $(".nTOHederUp p").on("click",function(){
          $(".nTOHederUp input").val("");
        })
      }
    }
</script>

<style scoped>
.noTableOrder{
  flex:1;
  -webkit-flex:1;
  display: flex;
  flex-direction: column;
}
</style>
