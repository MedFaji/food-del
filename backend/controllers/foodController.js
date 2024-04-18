import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  try {
    let image_filename = req.file.filename;
    const newFood = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await newFood.save();
    res.status(201).json(newFood);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getFoods = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json(foods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getFoodById = async (req, res) => {
  try {
    const food = await foodModel.findById(req.params.id);
    res.status(200).json(food);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.params.id);

    food.name = req.body.name;
    food.description = req.body.description;
    food.price = req.body.price;
    food.category = req.body.category;
    food.image = req.file.filename;

    await food.save();
    res.status(200).json(food);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.params.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Food deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { addFood, getFoods, deleteFood, getFoodById };
