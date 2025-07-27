const express = require('express');
const {getAllProducts,createProduct,updateProduct,getProductDetails,deleteProduct} = require('../controllers/productController');

const router = express.Router(); 

// Route to create a new product
router.route('/product/new').post(createProduct);

// Route to get all products
router.route('/products').get(getAllProducts);


// Route to get, update, or delete a single product by ID
router.route('/product/:id').get(getProductDetails).put(updateProduct).delete(deleteProduct);



module.exports = router;