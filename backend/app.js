const express = require('express');
const app = express();

const errorMiddleware = require('./middleware/error');

app.use(express.json());

// importing routes
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');// bad m krna h chuutii ho gyi libry ki 

app.use('/api/v1/', product);
app.use('/api/v1/', user);


// Middleware for error handling
app.use(errorMiddleware);


module.exports = app;