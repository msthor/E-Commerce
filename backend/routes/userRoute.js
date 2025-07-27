const express = require('express');

const { registerUser } = require('../controllers/userController');

const router = express.Router(); 

// Route to create a new user
router.route('/register').post(registerUser);


module.exports = router;