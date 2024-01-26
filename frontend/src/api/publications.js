import { connectionData } from "./apiConnection";

/* export const fetchPublications = await connectionData(
	
);
 */
export async function fetchPublications() {
	/* try {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/publications`,
			{
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("token") ?? null,
				},
			}
		);

		if (!response.ok) {
			throw new Error("error");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	} */

	const options = {
		endpoint: import.meta.env.VITE_BACKEND_URL,
		direction: "publications",
		method: "GET",
		token: localStorage.getItem("token") ?? null,
		body: false,
	};

	const result = await connectionData(options);
	return result;
}

export async function fetchPublicationById(publicationId) {
	/* try {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/publications/${publicationId}`,
			{
				method: "GET",
			}
		);

		if (!response.ok) {
			throw new Error("error");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	} */

	const options = {
		endpoint: import.meta.env.VITE_BACKEND_URL,
		direction: `publications/${publicationId}`,
		method: "GET",
		token: localStorage.getItem("token") ?? null,
		body: false,
	};

	const result = await connectionData(options);
	return result;
}

export async function createPublication(publication) {
	/* try {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/publications`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(publication),
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	} */

	const options = {
		endpoint: import.meta.env.VITE_BACKEND_URL,
		direction: `publications`,
		method: "POST",
		token: localStorage.getItem("token") ?? null,
		body: JSON.stringify({ ...publication, user: "user" }), //aca!!!
	};
	const result = await connectionData(options);
	return result;
}

export async function editPublication(publicationId, publication) {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/publications/${publicationId}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(publication),
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function deletePublication(id) {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/publications/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchPublicationByKeyWord(keyWord) {
	try {
		const response = await fetch(
			`${
				import.meta.env.VITE_BACKEND_URL
			}/publications/search/${keyWord}`,
			{
				method: "GET",
			}
		);

		if (!response.ok) {
			throw new Error("error");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}
