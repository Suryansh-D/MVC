const express = require("express");
const mongoose = require("mongoose");
const productController = require('../controllers/productController')
require('dotenv').config()

const router = express.Router();



// Create

router.post("/api/products", productController.createProduct );
 

// get route

router.get('/api/products' , productController.getAllProducts)
 
 // Get product by id
 
router.get('/api/products/:id' , productController.getById)
 
 //UPDATE product
 
router.put('/api/products/:id' , productController.updateProduct)
 
 //DELETE resourse
 
router.delete('/api/products/:id' , productController.deleteProduct);

module.exports = router;