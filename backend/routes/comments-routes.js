import express from "express";
import {
	createComment,
	editComment,
	getComment,
	deleteComment,
} from "../controllers/comment-controller.js";
import { authenticateToken } from "../middleware/token-middleware.js";

const commentRouter = express.Router();

commentRouter.get("/comment/:id", authenticateToken, getComment);
commentRouter.put("/comment/:id", authenticateToken, editComment);
commentRouter.delete("/comment/:id", authenticateToken, deleteComment);
commentRouter.post("/publications/:id", authenticateToken, createComment);

export default commentRouter;
