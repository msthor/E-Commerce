const mongoose = require('mongoose');

// const dotenv = require('dotenv');// jab apn ek bar dotenv ko import karte hain
// to usko config.env file ka path dena hota hai or vo pure app ke liye use hota hai to 
// isliye hum isko server.js me use karte hain frr isko import karne ki zarurat nahi hoti
// dotenv.config({ path: 'backend/config/config.env' });

const connectDatabase = () => {

mongoose.connect(process.env.DB_URI)
  .then((data) => console.log(`MongoDB connected with server : ${data.connection.host}`))
  .catch(err => console.error('MongoDB connection error:', err));

};

module.exports = connectDatabase;

