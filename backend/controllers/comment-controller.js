import Publication from "../model/publication.js";

export const getComment = async (req, res) => {
	try {
		const id = req.params.id;
		const publication = await Publication.findOne({ "comments._id": id });
		console.log(publication);
		res.json(publication);
	} catch (error) {
		console.error(error);
	}
};

export const editComment = async (req, res) => {
	const commentId = req.params.id;
	req.body._id = commentId;
	try {
		const publication = await Publication.findOneAndUpdate({
			"comments._id": commentId,
		});

		if (!publication) {
			return res.json({ message: "no se encontró el comentario" });
		}
		return res.json();
	} catch (error) {
		console.error(error);
	}
};

export const deleteComment = async (req, res) => {
	try {
		const { id } = req.params;
		const publication = await Publication.findOneAndDelete(id, req.body);
		if (!publication) {
			return res.json({ message: "no se encontró la publicación" });
		}
		return res.json();
	} catch (error) {
		console.error(error);
	}
};
