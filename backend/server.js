import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";

// Constants
const PORT = 4000;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/foods", foodRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Routes
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
