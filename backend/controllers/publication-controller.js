import Publication from "../model/publication.js";

const createPublication = async (req, res) => {
	try {
		const publication = await Publication.create(req.body);
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
		const publication = await Publication.findByIdAndDelete(id, req.body);
		if (!publication) {
			return res.json({ message: "no se encontró la publicación" });
		}
		return res.json();
	} catch (error) {
		console.error(error);
	}
};

const createComment = async (req, res) => {
	try {
		const { id } = req.params;

		const publication = await Publication.findOneAndUpdate(
			{ _id: id },
			{ $push: { comments: req.body } }
		);

		if (!publication) {
			return res.json({ message: "no se encontró el comentario" });
		}
		return res.json();
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
	createComment,
};
