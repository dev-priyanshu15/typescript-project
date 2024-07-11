import express from "express";
import {registrationUser,activateUser, loginUser, logoutUser, updateAccessToken, getUserInfo, socialAuth} from "../controllers/user.controller";
import { isAutheticated } from "../middleware/auth";

const userRouter = express.Router();
userRouter.post('/registration',registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);
userRouter.get("/logout",isAutheticated, logoutUser);
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me", isAutheticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
export default userRouter;