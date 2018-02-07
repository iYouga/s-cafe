// 展开详细说明
$(".cSSectionTwoTextMore").click(function(){
    $(".cSSectionTwoText").css("height","7.3rem");
    $(this).css("display","none");
    $(".cSSectionTwoTextLess").css("display","block");
})
$(".cSSectionTwoTextLess").click(function(){
    $(".cSSectionTwoText").css("height","2.6rem");
    $(this).css("display","none");
    $(".cSSectionTwoTextMore").css("display","block");
})


// 跳-------------------------------------------------------
// 跳转记录页面

$(".cSHeader a:nth-child(3)").click(function(){
    $(".changeShiftRecord").animate({"left":"0"},300);
})

// 跳回
$(".changeShiftRecordHeader a:first-child").click(function(){
    $(".changeShiftRecord").animate({"left":"7.5rem"},300);    
})

// 查看收银员
$(".changeShiftRecordHeader a:last-child").click(function(){
    $(".changeShiftRecordHeaderPosition").css("display","block");
    $(".changeShiftRecordHeaderPositionFog").css("display","block");
})
$(".changeShiftRecordHeaderPositionFog").click(function(){
    $(".changeShiftRecordHeaderPosition").css("display","none");
    $(".changeShiftRecordHeaderPositionFog").css("display","none");
})

// 记录点击看详情
$(".changeShiftRecordMsg li").click(function(){
    location.href="changeShiftsDetails2.html";
})