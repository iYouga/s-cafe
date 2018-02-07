$(".oFSectionMenu a").click(function(){
    $(this).attr("class","oFActive").siblings().removeAttr("class","oFActive");
})

$(".oFHeader a:nth-child(3)").click(function(){
    location.reload();
})
