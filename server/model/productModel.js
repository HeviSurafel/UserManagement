const mongoose=require('mongoose')

const productModel=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please fill the name !"],
        unique:true
    },
    price:{
        type:Number,
        required:[true,"please fill the price !"]
    },
    quantity:{
        type:String,
        required:[true,"please fill the quantity !"]
    }
},{
    timeStamp:true
})
module.exports=mongoose.model("Product",productModel)