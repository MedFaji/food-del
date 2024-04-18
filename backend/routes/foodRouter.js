import express from "express";
import {
  addFood,
  deleteFood,
  getFoodById,
  getFoods,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/", getFoods);
foodRouter.get("/:id", getFoodById);
foodRouter.delete("/:id", deleteFood);

export default foodRouter;
