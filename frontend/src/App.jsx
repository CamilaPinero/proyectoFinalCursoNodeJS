import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Container } from "./components/Container";
import { NewPublication } from "./components/NewPublication";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Menu />
				<Routes>
					<Route path="/" element={<Container />}></Route>
					<Route
						path="/create-new-publication"
						element={<NewPublication />}
					></Route>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
