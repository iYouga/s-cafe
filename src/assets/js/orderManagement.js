// swiper切换+导航按钮背景色变化
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    on: {
      slideChangeTransitionStart: function(){
      console.log('当前的slide序号是'+this.activeIndex);
      $(".oMHeaderDown a:nth-child("+(this.activeIndex+1)+")").css("background","#ddd");
      $(".oMHeaderDown a:nth-child("+(this.activeIndex+1)+")").siblings().css("background","#fff");
    }, 
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