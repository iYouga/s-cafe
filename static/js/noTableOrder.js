$('.nTOHederDownMove a').click(function(){
    $(this).attr("class","nTOHederDownMoveActive").siblings().removeAttr("class","nTOHederDownMoveActive")
})
$(".nTOHederUp p").on("click",function(){
    $(".nTOHederUp input").val("");
})