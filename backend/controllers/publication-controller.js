import Publication from "../model/publication.js";
import User from "../model/user.js";

const createPublication = async (req, res) => {
	try {
		const userId = req.user.user._id;
		const user = await User.findById(userId);
		const newPublication = { ...req.body, userId, user: user.user };
		const publication = await Publication.create(newPublication);

		res.json(publication);
	} catch (error) {
		console.error(error);
	}
};

const getAllPublications = async (req, res) => {
	try {
		const publications = await Publication.find({});
		res.json(publications);
		return publications;
	} catch (error) {
		console.error(error);
	}
};

const getPublicationById = async (req, res) => {
	try {
		const { id } = req.params;
		const publication = await Publication.findById(id);
		res.json(publication);
	} catch (error) {
		console.error(error);
	}
};

const editPublication = async (req, res) => {
	try {
		const { id } = req.params;
		const publication = await Publication.findByIdAndUpdate(id, req.body);
		if (!publication) {
			return res.json({ message: "no se encontró la publicación" });
		}
		return res.json();
	} catch (error) {
		console.error(error);
	}
};

const deletePublication = async (req, res) => {
	try {
		const { id } = req.params;
		const publication = await Publication.findByIdAndDelete(id);
		if (!publication) {
			return res.json({ message: "no se encontró la publicación" });
		}
		return res.json();
	} catch (error) {
		console.error(error);
	}
};

const getPublicationsByKeyWord = async (req, res) => {
	try {
		const { keyWord } = req.params;
		const regex = new RegExp(keyWord, "gi");
		const publications = await Publication.find({
			title: regex,
		});

		if (!publications) {
			return res.json({ message: "no se encontró la publicación" });
		}
		res.json(publications);
		return publications;
	} catch (error) {
		console.error(error);
	}
};

export {
	createPublication,
	getAllPublications,
	getPublicationById,
	editPublication,
	deletePublication,
	getPublicationsByKeyWord,
};
