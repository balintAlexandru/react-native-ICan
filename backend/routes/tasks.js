const express = require("express");
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  getAllTasks,
  checkTask,
  deleteAllTasks,
} = require("../controllers/taskController");

const router = express.Router();

// GET category all tasks
router.get("/category/:id", getTasks);

//GET All tasks
router.get("/all", getAllTasks);

// POST a new task
router.post("/:id", createTask);

// DELETE a task
router.delete("/:id", deleteTask);

// DELETE all tasks
router.delete("/all/:id", deleteAllTasks);

// UPDATE a task
router.patch("/:id", updateTask);

//CHECK a task
router.patch("/:id", checkTask);

module.exports = router;
