const mongoose=require('./my_mongoose');

var schema=mongoose.Schema;

var object=new schema({
    UserName: String,
    ObjectName: String,
    IsDelete: Number,
    IsDoing: Number,
    UserId: String,//给个默认值
});
console.log("创建模板成功");

var objectModel=mongoose.model("objectModel", object);
console.log("创建文档成功");

module.exports=objectModel;