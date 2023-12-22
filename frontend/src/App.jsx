import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Container } from "./components/Container";
import { NewPublication } from "./components/NewPublication";
import { FullPublication } from "./components/FullPublication";

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
