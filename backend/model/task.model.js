import mongoose from "mongoose"
import { subtaskSchema } from "./subtask.model.js"

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desription : {
        type: String,
        required: true
    },
    listname: {
        type: String,
        required: true
    },
    due_date : {
        type: Date,
        required: true
    },
    tag : {
        type: String,
        default : "no-tag"
    },
    subtasks : {
        type: [subtaskSchema],
        default : []
    }
})

const Task = mongoose.model("Task",taskSchema)

export default Task