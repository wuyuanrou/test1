const http=require('http');
const path=require('path');
const fs=require('fs');
const express=require('express');

const app=express();

//允许访问src下的所有文件
//如果不添加这句会被禁止访问
app.use(express.static('src'));

app.get('', function (req, res){
    //访问不了除html外的其他文件
    let url=req.url;
    let extname=path.extname(url);
    let filename=path.basename(url, extname);
    let fpath='';

    console.log('request: ', url);
    console.log('filename: ', filename);
    console.log('extname: ', extname);

    if(url==='/') {
        fpath = path.join(__dirname, 'src', 'html', 'index.html');
    }else{
        fpath=path.join(__dirname, 'src', url);
    }

    console.log("fpath: ", fpath);

    fs.readFile(fpath, function (err, data){
        if(err){
            return res.end('<h1>File Error</h1>');
        }
        res.end(data);
    })
})

app.get('/search/:keyword', function(req, res){
    //获取url携带参数
    //不携带参数情况下是一个空对象
    var query=req.params;//动态匹配参数
    var keyword=query.keyword;

    //对数据的处理

    //多个要push进数组，然后转成json字符串
    //这里模拟数据处理
    var arr=[{content:'你搜索的关键词是：'+keyword}, {content: '没有通告'}];
    for(var i=0;i<8;i++){
        arr.push({content: '测试文本'});
    }
    arr=JSON.stringify(arr);

    res.send(arr);
});

app.post('', function(req, res){
    var postData='';
    req.on('data', chunk => {postData+=chunk.toString()});
    req.on('end', ()=>{console.log('postData:', postData)});
    res.send('我是服务端返回的消息。接受到数据啦');
});

app.post('/apply', function(req, res){
    res.send('收到报名信息了');
});
app.listen(80, function (){
    console.log('listen on http://127.0.0.1');
});