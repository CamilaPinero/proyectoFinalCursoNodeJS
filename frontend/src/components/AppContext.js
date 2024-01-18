import { createContext } from "react";

export const initialState = {
	publications: [],
	loggedIn: false,
};

export const AppContext = createContext({});
