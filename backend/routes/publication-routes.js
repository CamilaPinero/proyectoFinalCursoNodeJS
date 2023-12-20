import express from "express";
const router = express.Router();
import {
	createPublication,
	getAllPublications,
	getPublicationById,
	editPublication,
	deletePublication,
} from "../controllers/publication-controller.js";

router.post("/", createPublication);
router.get("/", getAllPublications);
router.get("/:id", getPublicationById);
router.put("/:id", editPublication);
router.delete("/:id", deletePublication);

export default router;
