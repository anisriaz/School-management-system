const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const connectDb = async () => {
  try {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   
    };

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI, opts);
      console.log("db connection");
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDb;



   