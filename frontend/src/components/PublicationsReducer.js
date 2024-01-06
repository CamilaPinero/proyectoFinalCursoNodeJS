export const PublicationsReducer = (state, action) => {
    switch (action.type) {
        case "setPublications":
			return {
				...state,
				publications: action.payload,
			};
    }
}