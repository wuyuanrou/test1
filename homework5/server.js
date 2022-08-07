//引入模块
const http=require('http');
const fs=require('fs');
const path=require('path');

//获取服务器
const server=http.createServer();

//绑定事件
server.on("request", function (req, res){
    var url=req.url;
    var extname=path.extname(url);
    var fpath='';

    console.log("request:  ", url);
    console.log("extname:  ", extname);

    //映射文件url
    if(path.basename(url, extname)==="index"){
        fpath=path.join(__dirname, 'index'+extname);
    }else if(url==="/"){
        fpath = path.join(__dirname, 'index.html');
    }else{
        fpath=path.join(__dirname, url);
    }

    console.log("fpath:  ",fpath);

    //返回读取文件的结果
    fs.readFile(fpath, 'utf-8', function (err, data){
        if(err){
            console.log(err);
            return res.end("<h1 style='text-align: center'>Read file error</h1>");
        }
        //res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(data);
    })
});

//监听端口
server.listen(80, function (){
    console.log("listen on http://127.0.0.1");
});