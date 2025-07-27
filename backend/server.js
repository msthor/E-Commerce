const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception');
    process.exit(1);
});


// configure dotenv to use the config.env file
dotenv.config({ path: 'backend/config/config.env' });
// connect to the database
connectDatabase();




const Server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled promise rejection');
    Server.close(() => {
        process.exit(1);
    });
});