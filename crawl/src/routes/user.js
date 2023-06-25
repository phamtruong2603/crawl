import express from "express";
import authVeryToken from "../middlewares/authVeryToken.js";
import { userController } from "../controllers/user.js";

const userRoute = express.Router();

userRoute.post('/register', userController.createUser)
userRoute.post('/login', userController.login)

userRoute.use(authVeryToken)
userRoute.get('/autoLogin', userController.autoLoginWithToken)

export default userRoute