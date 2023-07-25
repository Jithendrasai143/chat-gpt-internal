const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set('strictQuery', false)
  try {
    mongoose.connect("mongodb://localhost:27017",{dbName:"testDb"});
    console.log("MongoDB connected!!");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

module.exports = connectDB;
