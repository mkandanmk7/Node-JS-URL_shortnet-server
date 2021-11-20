require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      () => console.log("mongo db connected at url", process.env.MONGODB_URL)
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
