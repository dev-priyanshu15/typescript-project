import express from "express";
import {registrationUser,activateUser, loginUser, logoutUser} from "../controllers/user.controller";

const userRouter = express.Router();
userRouter.post('/registration',registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);
export default userRouter;