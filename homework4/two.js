var btn=document.querySelector("#btn");

btn.addEventListener('click',function (){
    //不用promise
    setTimeout(()=>{
        let n=rand(1, 100);
        if (n<=30){
            alert('中奖');
        }else{
            alert('再接再厉');
        }
    }, 1000);


    //用promise对异步进行封装
    const p=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let n=rand(1, 100);
            if (n<=30){
                resolve(n);//将promise对象p的状态设置为成功
            }else{
                reject(n);//将promise对象p的状态设置为失败
            }
        })
    });

    p.then((value)=>{alert('中奖了'+value)},(reason)=>{alert('再接再厉'+reason)});
});