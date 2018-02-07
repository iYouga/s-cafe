<template>
  <div class="orderManagement">
    <div class="oMInOrder">
     <orderManagementHeader></orderManagementHeader>
     <orderManagementSec></orderManagementSec>
     <orderManagementOther></orderManagementOther>
    </div>
  </div>
</template>

<script>
  import orderManagementHeader from "../components/orderManagement/orderManagementHeader"
  import orderManagementSec from "../components/orderManagement/orderManagementSec"
  import orderManagementOther from "../components/orderManagement/orderManagementOther"
  import "../../static/css/orderManagement.css"

    export default {
      name: "order-management",
      components:{
        orderManagementHeader,
        orderManagementSec,
        orderManagementOther,
      },
      mounted(){
// swiper切换+导航按钮背景色变化
        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: false,
          onSlideChangeEnd:function(swiper){
              console.log('当前的slide序号是'+swiper.activeIndex);
              $(".oMHeaderDown a:nth-child("+(swiper.activeIndex+1)+")").css("background","#ddd");
              $(".oMHeaderDown a:nth-child("+(swiper.activeIndex+1)+")").siblings().css("background","#fff");
            },
        });
        $('.oMHeaderDown a:nth-child(1)').click(function(){
          mySwiper.slideTo(0, 300, true);//切换到第一个slide，速度为1秒
        });
        $('.oMHeaderDown a:nth-child(2)').click(function(){
          mySwiper.slideTo(1, 300, true);//切换到第er个slide，速度为1秒
        });
        $('.oMHeaderDown a:nth-child(3)').click(function(){
          mySwiper.slideTo(2, 300, true);//切换到第san个slide，速度为1秒
        })

//   外卖跟店内点击事件

        $(".oMHeaderTwo a").click(function(){
          $(this).attr("class","oMHeaderTwoAct").siblings().removeAttr("class","oMHeaderTwoAct")
          $(".oMOut").css("display","block");
          $(".oMfog").css("display","block");
        })
        $('.oMOut a').click(function(){
          $(".oMOut").css("display","none");
          $(".oMfog").css("display","none");
          $(".oMHeaderTwo a:nth-child(1)").attr("class","oMHeaderTwoAct").siblings().removeAttr("class","oMHeaderTwoAct")
        })

// search

        $(".oMHeaderThree").click(function(){
          $(".oMInOrder").animate({"left":"-7.5rem"},300)
          $('.oMSearch').animate({"left":"0"},300)
        })
        $(".oMSearchTop i:first-child").on("click",function(){
          $(".oMInOrder").animate({"left":"0"},300)
          $('.oMSearch').animate({"left":"7.5rem"},300)
        })

        $(".oMSearchTop p").click(function(){
          $(".oMSearchTop input").val("");
        })

        // 待处理+已完成订单详情页链接点击
        $(".oMSecOneList li").click(function(){
          location.href="#/orderDetails"
        });
        $(".oMSecTwoList li").click(function(){
          location.href="#/finishOrderDetails"
        })

      }
    }
</script>

<style scoped>
.orderManagement{
  flex:1;
  -webkit-flex:1;
  display: flex;
  flex-direction: column;
}
</style>
