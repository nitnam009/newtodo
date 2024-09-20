const express = require('express');
const router = express.Router();
const Task = require('../models/task'); // You'll create this model below

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Add additional routes as needed (POST, PUT, DELETE)

module.exports = router;

