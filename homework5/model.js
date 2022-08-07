const mongoose=require('./my_mongodb');//自定义模块前要有./或../，否则一律当做内置模块处理。

var schema=mongoose.Schema;

var thing_schema=new schema({
    Name:String,
    IsDelete: Number,//0代表没删除，1代表已删除
});//设置模板
console.log("创建模板成功");

var thingModel=mongoose.model("thingModel", thing_schema);//集合名称为thingModels，以thing_schema为模板
console.log("创建集合成功");

module.exports=thingModel;