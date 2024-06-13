const express=require('express')
const router=express.Router();
const {getproduct,getsingleproduct,addproduct,updateproduct,deleteproduct}=require('../controller/productController.js')
// get all products,add products
router.get("/",getproduct).post("/",addproduct)
// get single product, update ,delete
router.get("/:id",getsingleproduct).put("/:id",updateproduct).delete("/:id",deleteproduct)
module.exports=router;