$(function (){
    $(".detail").hide();
    $("#menu>li").mouseover(function (){
        $(this).children("ul").stop().show();
    });
    $("#menu>li").mouseout(function (){
        $(this).children("ul").stop().hide();
    });

})