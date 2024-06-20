import express from 'express'
import { createSubtask, getAllSubtasks } from '../controller/subtask.controller.js';

const router = express.Router({ mergeParams: true })

router.get("/", getAllSubtasks)
router.post("/", createSubtask)

export default router