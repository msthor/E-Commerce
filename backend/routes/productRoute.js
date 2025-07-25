const express = require('express');
const {getAllProducts,createProduct,updateProduct} = require('../controllers/productController');

const router = express.Router(); 


// Route to get all products
router.route('/products').get(getAllProducts);
// Route to create a new product
router.route('/product/new').post(createProduct);

// route for update 
router.route('/product/:id').put(updateProduct);


module.exports = router;