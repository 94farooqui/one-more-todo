import express from 'express'
import TaskRouter from './task.router.js'
import SubTaskRouter from './subtask.router.js'

const router = express.Router()

router.use("/task", TaskRouter)
router.use("/task/:taskId/subtask", SubTaskRouter )
// router.use("/task/:taskId/subtask", (req,res) => {
//     console.log(req.params)
// } )

export default router