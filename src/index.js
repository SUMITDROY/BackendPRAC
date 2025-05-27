require('dotenv').config(); 
const express = require('express');
const app = express();

// console.log("MONGODB_URL:", process.env.MONGODB_URL);
// console.log(" PORT:", process.env.PORT);

const connectDB = require('./db/index.js');
connectDB();
