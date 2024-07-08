const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config()

const router = express.Router();



// Create

router.post("/api/products", async (req, res) => {
    await ProductModel.create({
     product_name: req.body.product_name,
     product_price: req.body.product_price,
     isInStock: req.body.isInStock,
     category: req.body.category,
   });
 
   return res.status(201).json({ message: "Product Created" });
 });
 

// get route

router.get('/api/products' , async(req , res)=>{
    const allProucts = await ProductModel.find({isInStock:true})
 
    return res.json(allProucts)
 })
 
 // Get product by id
 
router.get('/api/products/:id' , async(req , res)=>{
  const product = await ProductModel.findById(req.params.id)
 
  return res.json(product)
 })
 
 //UPDATE product
 
router.put('/api/products/:id' , async(req , res)=>{
   const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id , req.body , {new:true})
   return res.json(updatedProduct)
 }
 )
 
 //DELETE resourse
 
router.delete('/api/products/:id' , async(req , res)=>{
   const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id)
 
   return res.json(deletedProduct)
 });