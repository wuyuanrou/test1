const thingModel=require('./model');//一直报require undefined错误

function add(){
    var btn = document.getElementById('btn');
    var ul = document.querySelector("ul");//获取ul表格

    btn.onclick = function (){
        var newThing = document.getElementById("newThing");
        if(newThing.value===""){
            console.log("请输入待办事项");
            return false;
        }else{
            console.log(newThing.value);//打印输入的内容

            var newLi = document.createElement("li");//先创建一个新的li
            var newBtn = document.createElement("button");

            newLi.innerHTML=newThing.value;//再赋值，把input输入的内容赋给新的li
            newBtn.className="delete";
            newBtn.innerHTML="删除";
            newLi.style.justifyContent="space-around";
            newLi.appendChild(newBtn);
            ul.appendChild(newLi);//添加到ul表
            //ul[0].insertBefore(newLi, ul[0].children[0]);//插到第一位
            alert("添加成功");

            //数据库增加
            var thing1=new thingModel({Name: newThing.value, IsDelete: 0});//新建thing1文档，在thingModels集合

            thing1.save(function (err, doc){
                if(err){
                    return console.log("保存失败");
                }
                console.log(doc);
            });
        }
    }
}

function del(){
    let delete_btn=document.getElementsByClassName("delete");
    let ul=document.getElementsByTagName("ul");

    for(let i=0;i<delete_btn.length;i++) {
        delete_btn[i].onclick=()=>{
            ul[0].removeChild(delete_btn[i].parentNode);

            //数据库删除
            thingModel.updateOne({Name:name},{$set:{IsDelete:1}}, function (err, doc){
                 if(!err){
                    return console.log("删除成功");
                 }
                 console.log(doc);
             });
        }
    }
}

del();