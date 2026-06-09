const express = require("express");
console.log("Project Routes Loaded");
const router = express.Router();

const { createProject } = require("../controllers/projectController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.post(
  "/",
  protect,
  authorizeRoles("Admin"),
  createProject
);

module.exports = router;