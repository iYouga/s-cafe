
// 打印机点击弹出不打印信息

$(".cSDHeader a:last-child").click(function(){
    $(".cSDPosition").css("display","block").animate({"opacity":"1"},450);
    setTimeout(function(){
        $(".cSDPosition").animate({"opacity":"0"},800,function(){
            $(".cSDPosition").css("display","none");
        })
    },700)
})

// 交接班点击弹出交接成功信息
$(".cSDFooter").click(function(){
    $(".cSDPosition2").stop().css("display","block").animate({"opacity":"1"},450);
    setTimeout(function(){
        $(".cSDPosition2").stop().animate({"opacity":"0"},800,function(){
            $(".cSDPosition2").css("display","none");
        });
        $(".cSDFooter").css("display","none");    
    },700)
})