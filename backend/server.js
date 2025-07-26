const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// configure dotenv to use the config.env file
dotenv.config({ path: 'backend/config/config.env' });
// connect to the database
connectDatabase();







app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});