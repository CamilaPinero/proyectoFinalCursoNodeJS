import express from "express";
const userRouter = express.Router();
import { compareUser, createUser } from "../controllers/user-controller.js";

userRouter.post("/signIn", createUser);
userRouter.post("/logIn", compareUser);

export default userRouter;
