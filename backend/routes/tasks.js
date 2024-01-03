const express = require("express");
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

const router = express.Router();

// GET all tasks
router.get("/:id", getTasks);

// POST a new task
router.post("/:id", createTask);

// DELETE a task
router.delete("/:id", deleteTask);

// DELETE all tasks, replace deleteTask with deleteAllTask a new function in controller.
router.delete("/delete-all", deleteTask);

// UPDATE a task
router.patch("/:id", updateTask);

module.exports = router;
