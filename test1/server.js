const http=require('http');
const fs=require('fs');
const path=require('path');

const server=http.createServer();

server.on('request', function (req, res){
    let url=req.url;
    let extname=path.extname(url);
    let filename=path.basename(url, extname);
    let fpath='';

    console.log('request: ', url);
    console.log('filename: ', filename);
    console.log('extname: ', extname);

    if(url==='/') {
        fpath = path.join(__dirname, 'html', 'login.html');
    }else{
        fpath=path.join(__dirname, url);
    }

    console.log("fpath: ", fpath);

    fs.readFile(fpath, function (err, data){
        if(err){
            return res.end('<h1>File Error</h1>');
        }
        res.end(data);
    })
});

server.listen(80, function (){
    console.log("listen on http://127.0.0.1");
})