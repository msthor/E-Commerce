const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDatabase = () => {

mongoose.connect(process.env.DB_URI)
  .then((data) => console.log(`MongoDB connected with server : ${data.connection.host}`))
  .catch(err => console.error('MongoDB connection error:', err));

};

module.exports = connectDatabase;
