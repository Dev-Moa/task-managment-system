const Task = require('../models/task');
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");


exports.createtask = asyncHandler(async (req, res) => {
    const { description, start, end } = req.body;
    if (!description || !start || !end) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const newTask = await Task.create({
      description,
      start,
      end,
      user_id: req.user.id,
    });
  
    res.status(201).json(newTask);
  });

exports.getTasks = async (req,res,next)=>{
    try {
        const tasks = await Task.find({});
        return res.json({tasks})
    } catch (error) {
        return res.json({error:error.message})
    }
}



exports.updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.user_id.toString() !== req.user.id) {
    return res.status(403).json({ message: "User doesn't have permission to update other user's tasks" });
  }

  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedTask) {
    return res.status(404).json({ message: "Error updating task" });
  }
  
  res.status(200).json(updatedTask);
});


exports.deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("Task  not found");
  }
  if (task.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user tasks");
  }
  await Task.deleteOne({ _id: req.params.id });
  res.status(200).json(task);
});