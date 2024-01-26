import { connectionData } from "./apiConnection";

export async function createComment(publicationId, comment) {
	const options = {
		direction: `publications/${publicationId}`,
		method: "POST",
		token: localStorage.getItem("token"),
		body: comment,
	};
	const result = await connectionData(options);
	return result;
}

export async function editComment(commentId, comment) {
	const options = {
		direction: `comment/${commentId}`,
		method: "PUT",
		token: localStorage.getItem("token"),
		body: comment,
	};
	const result = await connectionData(options);
	return result;
}

export async function deleteComment(id) {
	const options = {
		direction: `comment/${id}`,
		method: "DELETE",
		token: localStorage.getItem("token"),
	};
	const result = await connectionData(options);
	return result;
}
