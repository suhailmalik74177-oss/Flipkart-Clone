import { Router } from "express";
import { Register, login } from "../controllers/user.js";
import { upload } from "../middlewares/multer.js";

const userRouter = Router()



userRouter.post('/register', upload.single('profilePic'), Register);



userRouter.post('/login',login)


export default userRouter;