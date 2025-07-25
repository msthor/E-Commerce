const express = require('express');

const app = express();
// importing routes
const productRoutes = require('./routes/productRoute');

app.use(express.json());
// using routes
app.use('/api/v1/', productRoutes);

module.exports = app;