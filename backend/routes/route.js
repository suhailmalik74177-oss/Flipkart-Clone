import { Router } from "express";
import { Register, login } from "../controllers/user.js";

const userRouter = Router()

userRouter.post('/register',Register)

userRouter.post('/login',login)


export default userRouter;