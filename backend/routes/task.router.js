import express from 'express'
import { createTask, getAllTasks,getTaskDetails,updateTask,deleteTask } from '../controller/task.controller.js'
import { auth } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get("/", auth, getAllTasks)
router.post("/", createTask)
router.get("/:taskId", getTaskDetails)
router.put("/:taskId", updateTask)
router.delete("/:taskId", deleteTask)



export default router