const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery");
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { db };
