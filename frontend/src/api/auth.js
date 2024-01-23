export const logIn = async (user) => {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/logIn`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
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
};

export const signUp = async (user) => {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/signIn`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return response;
};
