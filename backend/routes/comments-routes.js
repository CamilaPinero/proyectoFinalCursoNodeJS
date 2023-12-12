import express from "express";
import {
	editComment,
	getComment,
	deleteComment,
} from "../controllers/comment-controller.js";
const commentRouter = express.Router();

commentRouter.get("/:id", getComment);
commentRouter.patch("/:id", editComment);
commentRouter.delete("/:id", deleteComment);

export default commentRouter;
