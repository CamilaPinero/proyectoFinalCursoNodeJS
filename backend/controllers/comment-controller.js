import Publication from "../model/publication.js";
import User from "../model/user.js";

export const getComment = async (req, res) => {
	try {
		const id = req.params.id;
		const publication = await Publication.findOne({ "comments._id": id });

		res.json(publication);
	} catch (error) {
		console.error(error);
	}
};
//no funciona
export const editComment = async (req, res) => {
	const commentId = req.params.id;

	try {
		const publication = await Publication.findOneAndUpdate(
			{
				"comments._id": commentId,
			},
			{
				$set: {
					"comments.$.user": req.body.user,
					"comments.$.content": req.body.content,
				},
			}
		);

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
		const publication = await Publication.findOneAndUpdate(
			{ "comments._id": id },
			{ $pull: { comments: { _id: id } } }
		);
		if (!publication) {
			return res.json({ message: "no se encontró la publicación" });
		}
		return res.json();
	} catch (error) {
		console.error(error);
	}
};

export const createComment = async (req, res) => {
	try {
		const { id } = req.params;
		const userId = req.user.user._id;
		const user = await User.findById(userId);
		const publication = await Publication.findOneAndUpdate(
			{ _id: id },
			{ $push: { comments: { ...req.body, userId, user: user.user } } }
		);

		if (!publication) {
			return res.json({ message: "no se encontró el comentario" });
		}
		return res.json();
	} catch (error) {
		console.error(error);
	}
};
