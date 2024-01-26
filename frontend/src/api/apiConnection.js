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
				"Content-Type": "application.json",
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
		// TODO: si la respuesta es 403 redireccionar al log in
	}
};
