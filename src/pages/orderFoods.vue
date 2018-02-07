<template>
    <div class="orderFoods">
      <commonYHeader :oDHeader="oDHeader"></commonYHeader>
      <orderFoodsSec></orderFoodsSec>
    </div>
</template>

<script>
  import commonYHeader from "../components/common/commonYHeader"
  import orderFoodsSec from "../components/orderFoods/orderFoodsSec"
  import "../../static/css/orderFoods.css"
    export default {
        name: "order-foods",
      components:{
        commonYHeader,
        orderFoodsSec
      },
      data(){
        return{
          oDHeader:{
            "title":"桌位",
            "rIcon":"iconfont icon-shuaxin"
          }
        }
      },
      mounted:function(){
          // 变换class改变背景色
        $(".oFSectionMenu a").click(function(){
          $(this).attr("class","oFActive").siblings().removeAttr("class","oFActive");
        })
        // header返回键点击跳转
        $(".oFHeader a:first-child").click(function(){
          location.href="#/"
        })
        // header功能键点击刷新
        $(".oFHeader a:nth-child(3)").click(function(){
          location.reload();
        });
        // 跳转订单详情页
        $(".oFSectionTables li").click(function(){
          location.href="#/orderDetails"
        })
      }
    }
</script>

<style scoped>
.orderFoods{
  flex:1;
  -webkit-flex:1;
  display: flex;
  flex-direction: column;
}
</style>
