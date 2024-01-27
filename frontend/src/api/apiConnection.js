export const connectionData = async (options) => {
	try {
		const requestOptions = {
			method: options.method,
			headers: {},
		};

		if (options.token) {
			requestOptions.headers = {
				...requestOptions.headers,
				Authorization: options.token,
			};
		}
		if (options.body) {
			requestOptions.headers = {
				...requestOptions.headers,
				"Content-Type": "application/json",
			};
			requestOptions.body = JSON.stringify(options.body);
		}
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/${options.direction}`,
			requestOptions
		);

		if (!response.ok) {
			throw new Error(response.status);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		if (error.message == 403) {
			document.location.href = "/";
		}
	}
};
