import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { NewPublication } from "./components/NewPublication";
import { FullPublication } from "./components/FullPublication";
import { useEffect, useReducer, useState } from "react";
import { AppReducer } from "./components/AppReducer";
import { AppContext, initialState } from "./components/AppContext";
import { SignIn } from "./components/SignIn";
import { LogIn } from "./components/LogIn";

function App() {
	const [data, dispatch] = useReducer(AppReducer, initialState);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		setIsLoggedIn(!!token);
	}, []);

	return (
		<AppContext.Provider
			value={{
				state: data,
				dispatch,
			}}
		>
			<Router>
				{isLoggedIn ? (
					<>
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
							<Route
								path="*"
								element={<Navigate to="/" />}
							></Route>
						</Routes>
						<Footer />
					</>
				) : (
					<Routes>
						<Route
							path="/"
							default
							element={<Navigate to="/sign-in" />}
						></Route>
						<Route path="/sign-in" element={<SignIn />}></Route>
						<Route path="/log-in" element={<LogIn />}></Route>
					</Routes>
				)}
			</Router>
		</AppContext.Provider>
	);
}

export default App;
