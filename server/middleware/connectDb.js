const mongoose=require("mongoose")
const connectDb=async()=>{
    try {
        const connect=mongoose.connect(process.env.CONNECTION_STRING)
        console.log("database connected succesfully")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDb