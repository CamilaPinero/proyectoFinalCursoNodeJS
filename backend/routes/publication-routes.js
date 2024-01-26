import express from "express";
const router = express.Router();
import {
	createPublication,
	getAllPublications,
	getPublicationById,
	editPublication,
	deletePublication,
	getPublicationsByKeyWord,
} from "../controllers/publication-controller.js";
import { authenticateToken } from "../middleware/token-middleware.js";

router.post("/", authenticateToken, createPublication);
router.get("/", authenticateToken, getAllPublications);
router.get("/:id", authenticateToken, getPublicationById);
router.get("/search/:keyWord", authenticateToken, getPublicationsByKeyWord);
router.put("/:id", authenticateToken, editPublication);
router.delete("/:id", authenticateToken, deletePublication);

export default router;
