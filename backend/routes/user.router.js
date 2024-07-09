import express from 'express'
import { createUser, getAllUsers,getUserDetails,updateUser,deleteUser,getUserData } from '../controller/user.controller.js'
import { auth } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get("/", getAllUsers)
router.get("/mydata", auth, getUserData)
router.post("/", createUser)
router.get("/:token", getUserDetails)
router.put("/:UserId", updateUser)
router.delete("/:UserId", deleteUser)



export default router