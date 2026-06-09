const Task = require("../model/Task");

// Create Task
const createTask = async (req, res) => {
  try {

    const task = await Task.create(req.body);

    res.status(201).json(task);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get All Tasks
const getTasks = async (req, res) => {
  try {

    const tasks = await Task.find()
      .populate("project")
      .populate("assignedTo", "name email");

    res.status(200).json(tasks);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update Task Status
const updateTaskStatus = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    task.status = req.body.status;

    await task.save();

    res.status(200).json(task);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Assign Task
const assignTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    task.assignedTo = req.body.userId;

    await task.save();

    res.status(200).json(task);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Dashboard
const getDashboard = async (req, res) => {
  try {

    const totalTasks = await Task.countDocuments();

    const completedTasks = await Task.countDocuments({
      status: "Completed"
    });

    const pendingTasks = await Task.countDocuments({
      status: "Pending"
    });

    const inProgressTasks = await Task.countDocuments({
      status: "In Progress"
    });

    res.status(200).json({
      totalTasks,
      completedTasks,
      pendingTasks,
      inProgressTasks
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTaskStatus,
  assignTask,
  getDashboard
};