import { Router } from "express";
import { Register, Login } from "../controllers/user.js";

const userRouter = Router()

userRouter.post('/register',Register)

userRouter.post('/login',Login)


export default userRouter;