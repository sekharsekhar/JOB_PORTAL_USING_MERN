import mongoose, { modelNames } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connectd successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
