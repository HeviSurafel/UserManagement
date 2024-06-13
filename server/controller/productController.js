const asyncHandler=require('express-async-handler')
const Product=require("../model/productModel.js")
//@des get all product items
//@method get
// access public

const getproduct=asyncHandler(async(req,res)=>{
    const findProduct=await Product.find()
    if(!findProduct)
    {
        res.status(404)
        throw new Error("No product found")   
    }
    res.status(201).json(findProduct)
})

//@des get single product items
//@method get
// access public
const getsingleproduct=asyncHandler(async(req,res)=>{
    const findProduct=await Product.findById(req.params.id)
    if(!findProduct)
    {
        res.status(404)
        throw new Error("No product found")   
    }
    res.status(201).json(findProduct)
})

const addproduct=asyncHandler(async(req,res)=>{
    const{name,price,quantity}=req.body
    if(!name || !price || !quantity)
    {
        res.status(404)
        throw new Error("all fields are required")
    }
    const findProduct=await Product.findOne({name})
    if(findProduct)
    {
        res.status(404)
        throw new Error("product already registered")   
    }
    const newProduct=await Product.create({
        name,price,quantity
    })
    res.status(201).json(newProduct)
})
const updateproduct=asyncHandler(async(req,res)=>{
    const{name,price,quantity}=req.body
    const findProduct=await Product.findById(req.params.id)
    if(!findProduct)
    {
        res.status(404)
        throw new Error("product not found")   
    }
    const update= await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(201).json(update)
})
const deleteproduct=asyncHandler(async(req,res)=>{
    const{name,price,quantity}=req.body
    const findProduct=await Product.findById(req.params.id)
    if(!findProduct)
    {
        res.status(404)
        throw new Error("product not found")   
    }
    await Product.deleteOne()
    res.status(201).json({message:"deleted product"})
})

module.exports={getproduct,getsingleproduct,addproduct,updateproduct,deleteproduct}