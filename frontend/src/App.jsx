import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { NewPublication } from "./components/NewPublication";
import { FullPublication } from "./components/FullPublication";
import { useReducer } from "react";
import { AppReducer } from "./components/AppReducer";
import { AppContext, initialState } from "./components/AppContext";
import { SignIn } from "./components/SignIn";
import { LogIn } from "./components/LogIn";

function App() {
	const [data, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				state: data,
				dispatch,
			}}
		>
			<Router>
				{data.loggedIn ? (
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
						</Routes>
						<Footer />
					</>
				) : (
					<Routes>
						<Route path="/sign-in" element={<SignIn />}></Route>
						<Route path="/log-in" element={<LogIn />}></Route>
					</Routes>
				)}
			</Router>
		</AppContext.Provider>
	);
}

export default App;
