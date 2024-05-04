import express from "express"
import { loginUser, registerUser } from "../controllers/userController.js"


const userRouter = express.Router()

userRouter.post("/regiter", registerUser)
userRouter.post("/login", loginUser)

export default userRouter;