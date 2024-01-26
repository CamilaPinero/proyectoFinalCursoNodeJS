export const logIn = async (user) => {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/logIn`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});

	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.error);
	}
	return data;
};

export const signUp = async (user) => {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/signUp`, {
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
