const Product = require('../models/productModel');

//Admin: Function to create a new product  
exports.createProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Function to get all products
exports.getAllProducts = async (req, res) => {
     const products =  await Product.find(); 
     res.status(200).json({
        success: true,
        products
    });
};

// get single product by id
exports.getProductDetails = async(req, res)=>{
   const product = await Product.findById(req.params.id);
    if(!product){
         return res.status(404).json({
              success: false,
              message: 'Product not found'
         });
    }
    res.status(200).json({
        success: true,
        product
    });
}

//Admin: function to upadte a product 
exports.updateProduct = async (req, res,next) => {
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    
    res.status(200).json({
        success: true,  
        product
    });
}

// delete product
exports.deleteProduct = async (req, res,next) => { 
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }
    
    await product.deleteOne();
   
    res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
    });
}