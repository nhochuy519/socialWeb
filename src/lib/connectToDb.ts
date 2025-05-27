import mongoose from "mongoose";

type Connection = {
  isConnected?: number;
};

const connection: Connection = {};
export const connectToDb = async (): Promise<void> => {
  try {
    // Kiem tra ket noi toi MongoDB
    console.log("Connecting to MongoDB...");
    if (connection.isConnected) {
      console.log("MongoDB is already connected");
      return;
    }

    //! đảm bảo biến nầy không bị undefined
    await mongoose.connect(process.env.DATABASE_MONGO_URI!);
    console.log("Connected to MongoDB");
    connection.isConnected = mongoose.connection.readyState;
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
