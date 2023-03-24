window.addEventListener('load', function (){
    var btn=document.getElementById('apply_btn');
    var password=document.getElementById('password');
    var ensure_password=document.getElementById('ensure_password');
    var birthday=document.getElementById('birthday');

    var name_addition=document.getElementById('name_addition');
    var email_addition=document.getElementById('email_addition');
    var password_addition=document.getElementById('password_addition');
    var nation_addition=document.getElementById('nation_addition');
    var birthday_addition=document.getElementById('birthday_addition');
    var sex_addition=document.getElementById('sex_addition');
    var height_addition=document.getElementById('height_addition');

    var timer=null;//节流

    function Applicant(name, email, password, nation, birthday, sex, height, weight, selfIntro){
        this.name=name;
        this.email=email;
        this.password=password;
        this.nation=nation;
        this.birthday=birthday;
        this.sex=sex;
        this.height=height;
        this.weight=weight;
        this.selfIntro=selfIntro;
    }

    function changeAddition(a, content, color){
        a.innerHTML=content;
        a.style.fontSize="12px";
        if(color){
            a.style.color=color;
        }
    }

    btn.onclick=function (){
        if(timer){
            console.log('定时器还没到时间');
            return;
        }
        //节流
        timer=setTimeout(function (){timer=null}, 2000);

        var name=document.getElementById('name');
        var email=document.getElementById('email');
        var nation_select=document.getElementById('nation');
        var birthday=document.getElementById('birthday');
        var sex_select=document.getElementById('sex');
        var height=document.getElementById('height');
        var weight=document.getElementById('weight');
        var self_intro=document.getElementById('self_intro');

        //判断信息是否填写完全
        var flag=0;

        //处理国籍
        //把国家转换成数字代号存入数据库，需要获取时定义一个数组，index对应国家。获取index，拿到对应的国家
        var nationIndex=nation_select.selectedIndex;

        //处理性别
        var sexIndex=sex_select.selectedIndex;

        if(name.value===''){
            changeAddition(name_addition, "名字必填", "red");
            flag=1;
        }

        if(email.value===''){
            changeAddition(email_addition, "邮箱必填", "red");
            flag=1;
        }

        if(!nationIndex){
            changeAddition(nation_addition, "国籍必选", "red");
            flag=1;
        }

        if(!sexIndex){
            changeAddition(sex_addition, "性别必选", "red");
            flag=1;
        }

        if(password.value===''){
            changeAddition(password_addition, "密码必填", "red");
            flag=1;
        }

        if(birthday.value===''){
            changeAddition(birthday_addition, "生日必填", "red");
            flag=1;
        }

        if(height.value===''||weight.value===''){
            changeAddition(height_addition, "身高体重必填", "red");
            flag=1;
        }

        if(!flag){
            //要发送给后端的数据
            var newApplicant=new Applicant(name.value, email.value, password.value, nationIndex, birthday.value, sexIndex, height.value, weight.value, self_intro.value);

            //stringfy把一个js对象转成json字符串
            newApplicant=JSON.stringify(newApplicant);
            console.log(newApplicant);

            //ajax传数据去后端，存到数据库
            $.post('/apply', newApplicant, function (res){
                console.log(res);
                alert('报名成功');
            });
        }
    }

    password.oninput=function(){
        if(/^[a-zA-Z0-9]{10,}$/.test(password.value)===false){
            changeAddition(password_addition, "密码必须10位以上，且包含数字字母符号", "red");
        }else{
            changeAddition(password_addition, "密码符合要求", "#3398e3");
        }
    }

    ensure_password.oninput=function(){
        var add=document.getElementById('ensure_password_addition');

        if(password.value===''){
            changeAddition(add, "请先设置密码", "red");
        }else if(password.value.length===ensure_password.value.length){
            if(password.value!==ensure_password.value){
                changeAddition(add, "密码错误", "red");
            }else{
                changeAddition(add, "密码正确", '#3398e3');
            }
        }else if (password.value.length>ensure_password.value.length){
            changeAddition(add, "请输入完整的密码", "grey");
        }else{
            changeAddition(add, "密码错误", "red");
        }
    }

    birthday.oninput=function (){
        if(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(birthday.value)===false){
            changeAddition(birthday_addition, "日期格式应为2003-08-15", "red");
        }else{
            changeAddition(birthday_addition, "E.G.\"2003-08-15\"", "grey")
        }
    }
})