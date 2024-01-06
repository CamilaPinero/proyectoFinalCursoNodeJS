import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { NewPublication } from "./components/NewPublication";
import { FullPublication } from "./components/FullPublication";
import { useReducer } from "react";
import { PublicationsReducer } from "./components/PublicationsReducer";
import {
	PublicationsContext,
	initialState,
} from "./components/PublicationsContext";

function App() {
	const [data, dispatch] = useReducer(PublicationsReducer, initialState);

	return (
		<PublicationsContext.Provider
			value={{
				state: data,
				dispatch,
			}}
		>
			<Router>
				<Header />

				<Routes>
					<Route path="/" element={<Container />}></Route>
					<Route
						path="/create-new-publication"
						element={<NewPublication />}
					></Route>
					<Route
						path="/publication/:id"
						element={<FullPublication />}
					></Route>
				</Routes>
				<Footer />
			</Router>
		</PublicationsContext.Provider>
	);
}

export default App;
