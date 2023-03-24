$(function (){
    $(".detail").hide();
     $("#menu>li").mouseover(function (){
         $(this).children("ul").stop().show();
     });
     $("#menu>li").mouseout(function (){
         $(this).children("ul").stop().hide();
     });

})

function animate(object, target,callback){
    clearInterval(object.timer);
    object.timer=setInterval(function(){
        var step=(target-object.offsetLeft)/10;
        step=step>0? Math.ceil(step):Math.floor(step);
        if(object.offsetLeft===target){
            clearInterval(object.timer);
            if(callback){
                callback();
            }
        }
        object.style.left=object.offsetLeft+step+'px';
    }, 30);
}

window.addEventListener('load', function(){
    var scroll=document.querySelector('.scroll');
    var ul=document.querySelector('.scroll_images');
    var ol=document.querySelector('.circle');
    var focusWidth=scroll.offsetWidth;

    //点击小圆圈滑动图片
    for(var i=0;i<ul.children.length-1;i++){
        var li=document.createElement('li');
        li.setAttribute('index', i);
        //创建的时候同时绑定事件
        li.addEventListener('click', function(){
            //干掉所有人留下我自己的排他思想
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className="";
            }
            this.className="current";
            var index=this.getAttribute('index');
            num=index;
            circle=index;

            // console.log(index);
            // console.log(num);
            // console.log(circle);

            animate(ul, -index*focusWidth);
        })
        ol.appendChild(li);
    }
    ol.children[0].className="current";

    //点击箭头滑动图片
    var btn_right=document.querySelector(".arrow-right");
    var btn_left=document.querySelector(".arrow-left");
    var num=0;
    var circle=0;

    btn_right.addEventListener('click', function(){
        if(num===ul.children.length-1){
            ul.style.left=0;
            num=0;
        }
        num++;
        animate(ul, -num*focusWidth);

        //使小圆圈一起变化
        circle++;
        if(circle===ol.children.length){
            circle=0;
        }

        circleChange();
    });

    btn_left.addEventListener('click', function(){
        //这里用==可以，但是===不行
        if(num==0){
            num=ul.children.length-1;
            //console.log("ul length-1:", num);
            ul.style.left=-num*focusWidth+'px';
        }
        num--;
        animate(ul, -num*focusWidth);

        circle--;
        if(circle<0){
            circle=ol.children.length-1;
        }

        circleChange();
    });

    function circleChange(){
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className="";
        }
        ol.children[circle].className="current";
    }

    var timer=setInterval(function(){
        btn_right.click();
    }, 4000);

    scroll.addEventListener('mouseenter', function(){
        clearInterval(timer);
    })

    scroll.addEventListener('mouseleave', function(){
        timer=setInterval(function(){
            btn_right.click();
        }, 4000);//自动按右键
    })
})