const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1/homework', function (err){
    if(err) {
        return console.log(err);
    }
    console.log('连接成功');
})

mongoose.connection.once("open", function (){console.log("连接中")});

mongoose.connection.once("close", function (){console.log("连接断开")});

module.exports=mongoose;