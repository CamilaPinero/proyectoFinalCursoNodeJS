import "../styles/header.css";
import Icon from "@mdi/react";
import { mdiMenu, mdiMagnify } from "@mdi/js";

import { useNavigate } from "react-router-dom";
import { fetchPublicationByKeyWord } from "../ApiMethods";

export const Header = () => {
	const navigate = useNavigate();
	const options = [
		{ title: "Inicio", route: "/" },
		{ title: "Crear publicación", route: "/create-new-publication" },
		{ title: "Configuración", route: "/" },
	];

	async function handleSearch(e) {
		e.preventDefault();
		await fetchPublicationByKeyWord(e.target.search.value);
	}

	return (
		<nav className=" header navbar navbar-expand-lg">
			<div className="container-fluid">
				<div className="icon" onClick={() => navigate("/")}>
					<h2>Catinstagram</h2>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<Icon path={mdiMenu} size={1} />
				</button>
				<div
					className="menuList collapse navbar-collapse "
					id="navbarNav"
				>
					<div className="navbar-nav">
						{options.map((option) => (
							<div
								className="nav-item"
								onClick={() => navigate(option.route)}
								key={option.title}
								style={{ marginLeft: "10px" }}
							>
								{option.title}
							</div>
						))}
						<div
							className="search-form"
							style={{ marginLeft: "10px" }}
						>
							<form
								className="d-flex"
								role="search"
								onSubmit={(e) => handleSearch(e)}
							>
								<input
									className="form-control me-2"
									type="search"
									placeholder="Buscar"
									aria-label="Search"
									id="search"
								></input>
								<button
									className="btn btn-sm btn-search"
									type="submit"
								>
									<Icon path={mdiMagnify} size={1} />
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
