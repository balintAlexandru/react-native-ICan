const express = require("express");
const {
  getCategorys,
  deleteCategory,
  updateCategory,
  createCategory,
} = require("../controllers/categoryController");

const router = express.Router();

// GET all workouts
router.get("/", getCategorys);

// POST a new workout
router.post("/", createCategory);

// DELETE a workout
router.delete("/:id", deleteCategory);

// UPDATE a workout
router.patch("/:id", updateCategory);

module.exports = router;
