import express from 'express'
import TaskRouter from './task.router.js'
import SubTaskRouter from './subtask.router.js'
import UserRouter from './user.router.js'
import AuthRouter from './auth.router.js'

const router = express.Router()

router.use("/task", TaskRouter)
router.use("/task/:taskId/subtask", SubTaskRouter )
router.use("/auth",AuthRouter)
router.use("/user", UserRouter)
// router.use("/task/:taskId/subtask", (req,res) => {
//     console.log(req.params)
// } )

export default router