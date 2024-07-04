import express from 'express'
import { loginUser, signupUser} from '../controller/auth.controller.js'

const router = express.Router()

router.post("/login", loginUser)
router.post("/signup", signupUser )



export default router