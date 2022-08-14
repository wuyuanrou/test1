function getCode(){
    return alert("123456");
}

function CheckCode(){
    let code=document.getElementById("code");
    let user_name=document.getElementById("user_name");
    console.log(user_name.value);

    if(user_name.value===""){
        alert("用户名不能为空");
        return false;
    }else if(code.value!=="123456"){
        alert("验证码错误");
        return false;
    }else{
        let index=document.getElementById("login_a");
        index.href="../html/index.html";

        window.localStorage.setItem('user_name', user_name.value);
        alert("登录成功");
    }
}