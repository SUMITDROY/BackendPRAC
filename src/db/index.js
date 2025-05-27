require('dotenv').config();
const mongoose = require('mongoose')
const {DB_NAME }= require("../constants.js")


const connectDB = async() => {
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n connected HOSTDB:${connectionInstace.connection.host}`);
    } catch (error) {
        console.log("MONGO CONNECTION ERROR", error);
        process.exit(1)
    }
}

module.exports = connectDB;