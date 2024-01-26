export const connectionData = async (options) => {
	try {
		const requestOptions = {
			method: options.method,
			headers: {},
		};

		if (options.body) {
			requestOptions.headers = {
				"Content-Type": "application.json",
				Authorization: options.token,
			};
			requestOptions.body = JSON.stringify(options.body);
		}
		const response = await fetch(
			`${options.endpoint}/${options.direction}`,
			requestOptions
		);

		if (!response.ok) {
			throw new Error("error!");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Hubo el siguiente error: ", error);
	}
};
