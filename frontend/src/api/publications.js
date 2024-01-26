import { connectionData } from "./apiConnection";

export async function fetchPublications() {
	const options = {
		direction: "publications",
		method: "GET",
		token: localStorage.getItem("token"),
		body: null,
	};

	const result = await connectionData(options);
	return result;
}

export async function fetchPublicationById(publicationId) {
	const options = {
		direction: `publications/${publicationId}`,
		method: "GET",
		token: localStorage.getItem("token"),
		body: null,
	};

	const result = await connectionData(options);
	return result;
}

export async function createPublication(publication) {
	const options = {
		direction: `publications`,
		method: "POST",
		token: localStorage.getItem("token"),
		body: publication,
	};
	const result = await connectionData(options);
	return result;
}

export async function editPublication(publicationId, publication) {
	const options = {
		direction: `publications/${publicationId}`,
		method: "PUT",
		token: localStorage.getItem("token"),
		body: publication,
	};
	const result = await connectionData(options);
	return result;
}

export async function deletePublication(id) {
	const options = {
		direction: `publications/${id}`,
		method: "DELETE",
		token: localStorage.getItem("token"),
	};
	const result = await connectionData(options);
	return result;
}

export async function fetchPublicationByKeyWord(keyWord) {
	const options = {
		direction: `publications/search/${keyWord}`,
		method: "GET",
		token: localStorage.getItem("token"),
	};
	const result = await connectionData(options);
	return result;
}
