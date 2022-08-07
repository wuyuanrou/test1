const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1/homework',function (err){
    if(err){
        return console.log(err);
    }
});//这里不支持userClient参数（一开始跟教程加了userClient:true）导致连接失败

mongoose.connection.once("open", ()=>{console.log("数据库连接成功")});

mongoose.connection.once("close", ()=>{console.log("数据库断开")});

module.exports=mongoose;//这里要输出（返回）连接好的数据库！不然其他文件直接引用这个文件会报错。所有自定义模块化文件都要module.export