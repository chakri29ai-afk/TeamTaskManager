const express = require("express");
console.log("Task Routes Loaded");

const router = express.Router();

const {
  createTask,
  getTasks,
  updateTaskStatus,
  assignTask,
  getDashboard
} = require("../controllers/taskController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Create Task (Admin Only)
router.post(
  "/",
  protect,
  authorizeRoles("Admin"),
  createTask
);

// Get All Tasks
router.get(
  "/",
  protect,
  getTasks
);

// Update Task Status
router.put(
  "/:id/status",
  protect,
  updateTaskStatus
);

// Assign Task to User (Admin Only)
router.put(
  "/:id/assign",
  protect,
  authorizeRoles("Admin"),
  assignTask
);

// Dashboard
router.get(
  "/dashboard",
  protect,
  getDashboard
);

module.exports = router;