const Task = require("../models/taskModel");
const mongoose = require("mongoose");

const getTasks = async (req, res) => {
  const { id } = req.params;

  await Task.find({ categoryId: id })
    .sort({ createdAt: -1 })
    .then((response) => {
      res.status(200).json(response);
    });
};

// create new task
const createTask = async (req, res) => {
  const { id } = req.params;
  const { name, time } = req.body;

  //add doc to db
  try {
    const task = await Task.create({ categoryId: id, name, time });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such task" });

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) return res.status(404).json({ error: "No such task" });

  res.status(200).json(task);
};

// update a task
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, time } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such task" });

  const task = await Task.findByIdAndUpdate({ _id: id }, { name, time });

  if (!task) return res.status(404).json({ error: "No such task" });

  const updatedTask = await Task.findById(id);

  res.status(200).json(updatedTask);
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
