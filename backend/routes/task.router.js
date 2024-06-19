import express from 'express'
import { createTask, getAllTasks,getTaskDetails,updateTask,deleteTask } from '../controller/task.controller.js'

const router = express.Router()

router.get("/", getAllTasks)
router.post("/", createTask)
router.get("/:taskId", getTaskDetails)
router.put("/:taskId", updateTask)
router.delete("/:taskId", deleteTask)



export default router