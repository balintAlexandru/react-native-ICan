const Task = require("../models/taskModel");
const mongoose = require("mongoose");

//GET task
const getTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.find({ categoryId: id }).sort({ createdAt: -1 });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//GET all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//CREATE new task
const createTask = async (req, res) => {
  const { id } = req.params;
  const { name, time, completed } = req.body;

  try {
    const task = await Task.create({
      categoryId: id,
      name,
      time,
      completed,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE a task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such task" });

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) return res.status(404).json({ error: "No such task" });

  res.status(200).json(task);
};

//DELETE all tasks
const deleteAllTasks = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such task" });

  const task = await Task.deleteMany({ categoryId: id });

  if (!task) return res.status(404).json({ error: "No such task" });

  res.status(200).json(task);
};

//UPDATE a task
const updateTask = async (req, res) => {
  const { id } = req.params;

  const { name, time, completed } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such task" });

  const task = await Task.findByIdAndUpdate(
    { _id: id },
    { name, time, completed }
  );

  if (!task) return res.status(404).json({ error: "No such task" });

  const updatedTask = await Task.findById(id);

  res.status(200).json(updatedTask);
};

//CHECK task
const checkTask = async (req, res) => {
  const { id } = req.params;

  const { completed } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such task" });

  const task = await Task.findByIdAndUpdate({ _id: id }, { completed });

  if (!task) return res.status(404).json({ error: "No such task" });

  const updatedTask = await Task.findById(id);

  res.status(200).json(updatedTask);
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
  checkTask,
  deleteAllTasks,
};
