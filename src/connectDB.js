import mongoose from 'mongoose';
import config from './config';

const connectDB = async () => {
  if (!mongoose) {
    console.error('Mongoose is not defined');
    return;
  }

  try {
    await mongoose.connect(config.MONGO_URI, {
      // Add any additional connection options if needed
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

export default connectDB;