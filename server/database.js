const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/eventDB");
        console.log(" MongoDB Connected");
    } catch (error) {
        console.log(" MongoDB Connection Failed");
        console.log(error.message);
    }
};

module.exports = connectDB;