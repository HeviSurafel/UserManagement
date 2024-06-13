const express=require("express")
const productrouter=require("./routes/productRoutes.js")
const errorhandler = require("./middleware/errorHandler.js")
const connectDb=require('./middleware/connectDb.js')
const app=express()
const dotnv=require('dotenv').config()
const port=process.env.PORT || 5001
app.use(express.json())
app.use(errorhandler)
connectDb()
app.use("/api/stores",productrouter)

app.listen(port,()=>{
console.log(`we are runnning on port ${port}`)
})