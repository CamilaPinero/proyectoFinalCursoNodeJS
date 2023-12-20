import express from "express";
import {
	createComment,
	editComment,
	getComment,
	deleteComment,
} from "../controllers/comment-controller.js";
const commentRouter = express.Router();

commentRouter.get("/comment/:id", getComment);
commentRouter.put("/comment/:id", editComment);
commentRouter.delete("/comment/:id", deleteComment);
commentRouter.post("/publications/:id", createComment);

export default commentRouter;
