const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncError');
const ApiFeatures = require('../utils/apiFeatures');

//Admin: Function to create a new product  
exports.createProduct = catchAsyncErrors(async (req, res) => {
    
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        });   
});
// Function to get all products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    const resultPerPage = 5;
    const productsCount = await Product.countDocuments();
    const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage); 


    const products = await apiFeatures.query;

     res.status(200).json({
        success: true,
        products,
        productsCount,
        resultPerPage
    });
});

// get single product by id
exports.getProductDetails = catchAsyncErrors(async (req, res,next) => {
   const product = await Product.findById(req.params.id);
    if(!product){
         return next(new ErrorHandler('Product not found', 404));
    }
    res.status(200).json({
        success: true,
        product
    });
});

//Admin: function to upadte a product 
exports.updateProduct = catchAsyncErrors(async (req, res,next) => {
    let product = await Product.findById(req.params.id);
    if(!product){
         return next(new ErrorHandler('Product not found', 404));
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
});

// delete product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => { 
    const product = await Product.findById(req.params.id);
    if(!product){
       return next(new ErrorHandler('Product not found', 404));
    }
    
    await product.deleteOne();
   
    res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
    });
}); 