export async function createComment(publicationId, comment) {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/publications/${publicationId}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(comment),
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

export async function editComment(commentId, comment) {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/comment/${commentId}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(comment),
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

export async function deleteComment(id) {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/comment/${id}`,
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
