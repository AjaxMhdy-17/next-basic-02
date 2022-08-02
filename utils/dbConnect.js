const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://user:pass@cluster0.srkeu.mongodb.net/next-crud?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("mongo db connected");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;
