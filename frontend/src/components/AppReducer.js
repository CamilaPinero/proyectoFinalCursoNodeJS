export const AppReducer = (state, action) => {
	switch (action.type) {
		case "setPublications":
			return {
				...state,
				publications: action.payload,
			};
		case "setIsLoggedIn":
			return {
				...state,
				loggedIn: action.payload,
			};
	}
};
