import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://user:pass@cluster0.srkeu.mongodb.net/next-crud?retryWrites=true&w=majority
        `,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log('mongo connected');
      
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
