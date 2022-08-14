function Add(){
    let text=document.querySelector("input");
    add_doing(text.value);

    window.sessionStorage.setItem(text.value, "doing");
}

function Delete_doing(){
    let ul=document.getElementById("doing");
    let btns=document.getElementsByClassName("delete_doing");


    for(let i=0;i<btns.length;i++){
        btns[i].onclick=function (){
            ul.removeChild(this.parentNode);

            let thing=this.parentNode.innerText.split(" ");
            console.log(thing);

            window.sessionStorage.removeItem(thing[1]);
        }
    }
}

function Delete_done(){
    let ul=document.getElementById("done");
    let btns=document.getElementsByClassName("delete_done");


    for(let i=0;i<btns.length;i++){
        btns[i].onclick=function (){
            ul.removeChild(this.parentNode);

            let thing=this.parentNode.innerText.split(" ");
            console.log(thing);

            window.sessionStorage.removeItem(thing[1]);
        }
    }
}

function Finish(){
    let ul=document.getElementById("doing");
    let newul=document.getElementById("done");
    let btns=document.getElementsByClassName("finish");

    for(var i=0;i<btns.length;i++){
        btns[i].onclick=function (){
            ul.removeChild(this.parentNode);
            this.parentNode.removeChild(this.parentNode.firstElementChild);
            this.nextElementSibling.className="delete_done";
            this.className="unfinish";
            this.innerHTML="未完成";
            newul.appendChild(this.parentNode);

            let thing=this.parentNode.innerText.split(" ");
            //console.log(thing[0]);

            window.sessionStorage.removeItem(thing[0]);
            window.sessionStorage.setItem(thing[0], "done");
        }
    }
}

function unFinish(){
    let ul=document.getElementById("done");
    let newul=document.getElementById("doing");
    let btns=document.getElementsByClassName("unfinish");


    for(var i=0;i<btns.length;i++){
        btns[i].onclick=function (){
            ul.removeChild(this.parentNode);

            let edit_btn=document.createElement("button");
            edit_btn.innerHTML="编辑";
            edit_btn.className="edit";
            this.nextElementSibling.className="delete_doing";
            this.className="finish";
            this.innerHTML="完成";

            this.parentNode.insertBefore(edit_btn, this);
            newul.appendChild(this.parentNode);

            let thing=this.parentNode.innerText.split(" ");
            //console.log(thing);

            window.sessionStorage.removeItem(thing[0]);
            window.sessionStorage.setItem(thing[0], "doing");
        }
    }
}

function refactor(){
    let btns=document.getElementsByClassName("edit");
    let ul=document.getElementById("doing");

    for(var i=0;i<btns.length;i++){
        btns[i].onclick=function (){
            ul.removeChild(this.parentNode);
            let thing=this.parentNode.innerText.split(" ");
            window.sessionStorage.removeItem(thing[0]);

            let newThing=prompt("输入编辑的内容");
            //console.log(newThing);
            add_doing(newThing);
            window.sessionStorage.setItem(newThing, "doing");
        }
    }
}

function read(){
    let items=window.sessionStorage;

    for(var i=0;i<items.length;i++){
        var key=items.key(i);
        var value=items.getItem(key);

        if(value==="doing"){
            add_doing(key);
        }else if(value==="done"){
            add_done(key);
        }
    }
}

function add_done(key){
    let ul=document.getElementById("done");

    let newLi=document.createElement("li");
    let btn=document.createElement("button");
    let delete_btn=document.createElement("button");

    newLi.innerHTML=" "+key+" ";//保持格式一致
    btn.innerHTML="未完成";
    btn.className="unfinish";
    delete_btn.innerHTML="删除";
    delete_btn.className="delete_done";

    newLi.appendChild(btn);
    newLi.appendChild(delete_btn);

    ul.appendChild(newLi);
}

function add_doing(key){
    let ul=document.getElementById("doing");

    let newLi=document.createElement("li");
    let btn=document.createElement("button");
    let delete_btn=document.createElement("button");
    let edit_btn=document.createElement("button");

    newLi.innerHTML=" "+key+" ";//保持格式一致
    btn.innerHTML="完成";
    btn.className="finish";
    delete_btn.innerHTML="删除";
    delete_btn.className="delete_doing";
    edit_btn.innerHTML="编辑";
    edit_btn.className="edit";

    newLi.appendChild(edit_btn);
    newLi.appendChild(btn);
    newLi.appendChild(delete_btn);

    ul.appendChild(newLi);
}

function page_on(){
    let page=document.getElementById("user_page");
    page.style.visibility="visible";
}

function page_off(){
    let page=document.getElementById("user_page");
    page.style.visibility="hidden";
}

function clearStorage(){
    window.localStorage.clear();
}

function getUserName(){
    let user_name=document.getElementById("user_name");
    let userName=window.localStorage.getItem("user_name");
    user_name.innerHTML=userName;
}

// function db_save(objectName){
//     objectModel.create({
//         UserName: userName,
//         ObjectName: objectName,
//         IsDelete: 0,
//         IsDoing: 1,
//         UserId: 1,
//     }, function (err, data){
//         if(err){
//             return alert("保存数据出错，请检查数据库");
//         }
//         alert("保存数据成功");
//         console.log(data);
//     })
// }
//
// function db_find(){
//     objectModel.find({UserName: userName}, function (err, data){
//         if(err){
//             return alert("查找数据出错，请检查数据库");
//         }
//         alert("查找数据成功");
//         console.log(data);
//     })
// }
//
// function db_update(objectName, newObjectName){
//     objectModel.updateOne({UserName: userName,ObjectName: objectName}, {$set:{ObjectName: newObjectName}}, function (err, data){
//         if(err){
//             return alert("修改数据出错，请检查数据库");
//         }
//         alert("修改数据成功");
//         console.log(data);
//     })
// }
//
// function db_delete(objectName){
//     objectModel.deleteOne({UserName: userName,ObjectName: objectName}, function (err, data){
//         if(err){
//             return alert("删除数据出错，请检查数据库");
//         }
//         alert("删除数据成功");
//         console.log(data);
//     })
// }

window.addEventListener('click', Delete_doing);
window.addEventListener('click', Delete_done);
window.addEventListener('click', Finish);
window.addEventListener('click', unFinish);
window.addEventListener('click', refactor);
window.addEventListener('pageshow', read);
window.addEventListener('pageshow', getUserName);
window.addEventListener('close', clearStorage);