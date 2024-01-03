const Category = require("../models/catergoryModel");
const mongoose = require("mongoose");

//GET all categorys
const getCategorys = async (req, res) => {
  await Category.find({})
    .sort({ createdAt: -1 })
    .then((response) => {
      res.status(200).json(response);
    });
};

// create new category
const createCategory = async (req, res) => {
  const { name, icon } = req.body;

  //add doc to db
  try {
    const category = await Category.create({ name, icon });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a category
const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such category" });

  const category = await Category.findOneAndDelete({ _id: id });

  if (!category) return res.status(404).json({ error: "No such category" });

  res.status(200).json(category);
};

// update a workout
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, icon } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such category" });

  const category = await Category.findByIdAndUpdate(
    { _id: id },
    { name, icon }
  );

  if (!category) return res.status(404).json({ error: "No such category" });

  const updatedCategory = await Category.findById(id);

  res.status(200).json(updatedCategory);
};

module.exports = {
  createCategory,
  getCategorys,
  deleteCategory,
  updateCategory,
};
