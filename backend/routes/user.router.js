import express from 'express'
import { createUser, getAllUsers,getUserDetails,updateUser,deleteUser } from '../controller/user.controller.js'

const router = express.Router()

router.get("/", getAllUsers)
router.post("/", createUser)
router.get("/:token", getUserDetails)
router.put("/:UserId", updateUser)
router.delete("/:UserId", deleteUser)



export default router