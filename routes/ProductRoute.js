const express = require("express");
const Product = require("../models/ProductModel");
const router = express.Router();
const asyncHandler = require("express-async-handler");

router.get('/products',asyncHandler(async (req, res) => {
    const products = await Product.find({});
    console.log(products)
    res.json(products);
  })
);


router.get('/product/:id',asyncHandler(async(req,res)=>{
  const  product=  await Product.findById(req.params.id)
  if (product){
    res.send (product)
  }else{
    req.statusCode(404).json('not found')
  }
}))

module.exports=router