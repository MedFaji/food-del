import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

// Constants
const PORT = 4000;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
