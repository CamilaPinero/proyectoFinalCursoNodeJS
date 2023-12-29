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

router.post("/", createPublication);
router.get("/", getAllPublications);
router.get("/:id", getPublicationById);
router.get("/search/:keyWord", getPublicationsByKeyWord);
router.put("/:id", editPublication);
router.delete("/:id", deletePublication);

export default router;
