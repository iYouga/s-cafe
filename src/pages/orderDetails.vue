<template>
<div class="orderDetails">
  <commonYHeader :oDHeader="oDHeader"></commonYHeader>
  <orderDetailsSec></orderDetailsSec>
  <orderDetailsFooter></orderDetailsFooter>
  <orderDetailsNineMenu></orderDetailsNineMenu>
  <orderDetailsOthers></orderDetailsOthers>
</div>
</template>

<script>
  import commonYHeader from "../components/common/commonYHeader"
  import orderDetailsSec from "../components/orderDetails/orderDetailsSec"
  import orderDetailsFooter from "../components/orderDetails/orderDetailsFooter"
  import orderDetailsNineMenu from "../components/orderDetails/orderDetailsNineMenu"
  import orderDetailsOthers from "../components/orderDetails/orderDetailsOthers"
  import "../../static/css/orderDetails.css"
    export default {
        name: "order-details",
      components:{
        commonYHeader,
        orderDetailsSec,
        orderDetailsFooter,
        orderDetailsNineMenu,
        orderDetailsOthers
      },
      data(){
          return{
            oDHeader:{
              "title":"桌号10",
              "rIcon":"iconfont icon-liebiao"
            }
          }
      },
      mounted:function () {
          // header返回键点击跳转
        $(".oFHeader a:first-child").click(function(){
          location.href="#/orderFoods"
        });
        // header功能键点击出现遮罩层+定位部分
        $(".oFHeader a:last-child").click(function(){
          $(".oDPosition").css("display","block")
          $(".oDFog").css("display","block")
        });
        // 遮罩层点击消失的(所有固定定位)
        $(".oDFog").click(function(){
          $(".oDPosition").css("display","none")
          $(".oDFog").css("display","none")
          $(".fifthMenu").css("display","none");
          $(".sixthMenu").css("display","none");
          $(".EighthMenu").css("display","none");
          $(".thirdMenu").css("display","none");
        });
        // 9menu之1加菜跳转---------
        $(".oDPosition li:nth-child(1) a:nth-child(1)").click(function(){
          location.href="#/noTableOrder"
        });
        // 9menu之2绑定桌位---------
        $(".oDPosition li:nth-child(1) a:nth-child(2)").click(function(){
          $(".secondMenu").css({"display":"block","opacity":1});
          $(".oDFog").css("display","none");
          $(".oDPosition").animate("display","none");
          setTimeout(function(){
            $(".secondMenu").animate({"opacity":0},500,function(){
                $(".secondMenu").animate({"display":"none"})
            });
          },800)
        });
        // 9menu之3赠送---------
        $(".oDPosition li:nth-child(1) a:nth-child(3)").click(function(){
          $(".oDPosition").css("display","none");
          $(".oDFog").css("display","block");
          $(".thirdMenu").css("display","block");
        });
        $(".thirdMenu p a:first-child").click(function(){
          $(".oDFog").css("display","none");
          $(".thirdMenu").css("display","none");
        });
        // 9menu之4赠送---------
        $(".oDPosition li:nth-child(2) a:nth-child(1)").click(function(){
          location.href="#/noTableOrder"
        });
        // 9menu之5转台---------
        $(".oDPosition li:nth-child(2) a:nth-child(2)").click(function(){
          $(".fifthMenu").css("display","block");
          $(".oDPosition").css("display","none")
        });
        $(".fifthMenu p a:first-child").click(function(){
          $(".fifthMenu").css("display","none");
          $(".oDFog").css("display","none");
        })
        // 9menu之6并台---------
        $(".oDPosition li:nth-child(2) a:nth-child(3)").click(function(){
          $(".sixthMenu").css("display","block");
          $(".oDPosition").css("display","none")
        });
        $(".sixthMenu p a:first-child").click(function(){
          $(".sixthMenu").css("display","none");
          $(".oDFog").css("display","none");
        })
        // 9menu之7修改订单---------
        $(".oDPosition li:nth-child(3) a:nth-child(1)").on("click",function(){
          $(".modifyOrder").animate({"left":"0"},300);
          $(".oDPosition").css("display","none");
          $(".oDFog").css("display","none")
        });
        $(".modifyOrderUp").click(function(){
          $(".modifyOrderDown").toggle()
        })
        $(".aMHeader i").click(function(){
          $(".modifyOrder").animate({"left":"7.5rem"},300);
        })
        // 9menu之8取消订单---------
        $(".oDPosition li:nth-child(3) a:nth-child(2)").click(function(){
          $(".EighthMenu").css("display","block");
          $(".oDPosition").css("display","none");
        });
        $(".EighthMenu p a:first-child").click(function(){
          $(".EighthMenu").css("display","none");
          $(".oDFog").css("display","none")
        })

        $(".oDPosition li:nth-child(3) a:nth-child(3)").click(function(){
          $(".oDFog").css("display","none");
          $(".oDPosition").css("display","none");
        });
      }
    }
</script>

<style scoped>
.orderDetails{
  flex:1;
  -webkit-flex:1;
  display: flex;
  flex-direction: column;
}
</style>
