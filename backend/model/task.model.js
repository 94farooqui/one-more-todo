import mongoose, { Schema } from "mongoose";
import { subtaskSchema } from "./subtask.model.js";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desription: {
    type: String,
    required: true,
  },
  listname: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum : ["","Low","Medium","High"],
    default: ""
  },
  due_date: {
    type: Date,
    required: true,
  },
  tag: {
    type: String,
    default: "no-tag",
  },
  subtasks: [String],
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
