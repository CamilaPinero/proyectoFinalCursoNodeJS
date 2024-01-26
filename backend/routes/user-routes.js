import express from "express";
const userRouter = express.Router();
import { logIn, createUser } from "../controllers/user-controller.js";

userRouter.post("/signUp", createUser);
userRouter.post("/logIn", logIn);

export default userRouter;
