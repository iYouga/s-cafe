<template>
    <div class="addMeal">
      <div class="aMContent">
        <addMealHeader :title="msg.title"></addMealHeader>
        <addMealSec></addMealSec>
        <addMealFooter></addMealFooter>
        <addMealPositionAside></addMealPositionAside>
        <addMealPositionOther></addMealPositionOther>
      </div>
    </div>
</template>

<script>
  import addMealHeader from "../components/addMeal/addMealHeader"
  import addMealSec from "../components/addMeal/addMealSec"
  import addMealFooter from "../components/addMeal/addMealFooter"
  import addMealPositionAside from "../components/addMeal/addMealPositionAside"
  import addMealPositionOther from "../components/addMeal/addMealPositionOther"
  import "../../static/css/addMeal.css"
    export default {
        name: "add-meal",
      data(){
          return{
            msg:{
              "title":"添加菜品"
            }
          }
      },
      components:{
        addMealHeader,
        addMealSec,
        addMealFooter,
        addMealPositionAside,
        addMealPositionOther
      },
      mounted:function(){
          $(".aMHeader i").click(function () {
            location.href="#/";
          })
        // 拍照部分点击事件
        $(".aMSectionPhoto").click(function(){
          $(".aMPhotoMenu").animate({"bottom":"0"},300);
          $(".aMFog").css("display","block");
        })

        $(".aMFog").click(function(){
          $(this).css("display","none");
          $(".aMPhotoMenu").animate({"bottom":"-3rem"},300);
        })
        $(".aMPhotoMenu a:nth-child(3)").click(function(){
          $(".aMFog").css("display","none");
          $(".aMPhotoMenu").animate({"bottom":"-3rem"},300);
        })

// 菜品分类点击进入菜品页
        $(".aMSectionWriteMsg input:nth-child(4)").on("focus",function(){
          $('.aMGoAside').animate({"left":"0"},300);
          $(".aMContent").animate({"left":"-7.5rem"},300)
        })

        $(".aMGoAsideHeader i").click(function(){
          $('.aMGoAside').animate({"left":"7.5rem"},300);
          $(".aMContent").animate({"left":"0"},300)
        })

// 菜品分类添加
        $(".aMGoAsideHeader a").on("click",function(){
          if($(".aMGoAsideBody input").val()!=''){
            var flist=$(".aMGoAsideBodyClassList")[0]
            var flistEvery=flist.children;
            var nli=document.createElement("li");
            nli.innerHTML=$(".aMGoAsideBody input").val();
            flist.insertBefore(nli,flistEvery[0]);
            $(".aMSectionWriteMsg input:nth-child(4)").val($('.classInput').val());
            $('.aMGoAside').animate({"left":"7.5rem"},300);
            $(".aMContent").animate({"left":"0"},300)
          }else{
            // 若input款为空时
            $(".aMGoAsideBodyTanMsg").css("display","block").animate({"opacity":"1"},400);
            setTimeout(function(){
              $(".aMGoAsideBodyTanMsg").animate({"opacity":"0"},400).css("display","block");
            },1000)
          }
          // 清空文笔
          $(".aMGoAsideBody input").val("");
        })
// 菜品选中效果
        $('.aMGoAsideBodyClassList').on('click','li',function(){

          $(".aMSectionWriteMsg input:nth-child(4)").val($(this).html());
          $('.aMGoAside').animate({"left":"7.5rem"},300);
          $(".aMContent").animate({"left":"0"},300);

        })
      }
    }
</script>

<style scoped>
.addMeal{
  flex:1;
  -webkit-flex:1;
  display: flex;
  flex-direction: column;
}
</style>
