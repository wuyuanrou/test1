$(function (){
    $(".detail").hide();
    $("#menu>li").mouseover(function (){
        $(this).children("ul").stop().show();
    });

    $("#menu>li").mouseout(function (){
        $(this).children("ul").stop().hide();
    });

    $(".search_image").click(function(){
        var keyword=document.getElementById("keyword");
        var result=document.querySelector('.result');

        //console.log(keyword.value);
        $.get('/search/'+keyword.value, function (res){

            //拿到数据
            //把json字符串转成json对象
            res=JSON.parse(res);
            for(var i=result.children.length-1;i>=0;i--){
                result.removeChild(result.children[i]);
            }

            for(var i=0;i<res.length;i++){
                var newP=document.createElement('p')
                newP.innerHTML=res[i].content;
                //console.log(newP);
                result.appendChild(newP);
            }
        })
    });
})