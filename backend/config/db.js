import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://medevs:P2stMGrn4kyu5F21@cluster0.vinlzfv.mongodb.net/YumRush"
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("Error connecting to MongoDB"));
};
