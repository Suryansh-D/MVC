const ProductModel = require("../models/ProductModel");



 exports.createProduct = async (req, res) => {
    await ProductModel.create({
     product_name: req.body.product_name,
     product_price: req.body.product_price,
     isInStock: req.body.isInStock,
     category: req.body.category,
   });

   return res.status(201).json({ message: "Product Created" });
 }

 //-------------------

 exports.getAllProducts = async(req , res)=>{
    const allProucts = await ProductModel.find({isInStock:true})
 
    return res.json(allProucts)
 }

    //-------------------

 exports.getById = async(req , res)=>{
    const product = await ProductModel.findById(req.params.id)
   
    return res.json(product)
   }

    //-------------------

  exports.updateProduct =  async(req , res)=>{
    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id , req.body , {new:true})
    return res.json(updatedProduct)
  }

    //-------------------

   exports.deleteProduct = async(req , res)=>{
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id)
  
    return res.json(deletedProduct)
  }