import "../styles/header.css";
import Icon from "@mdi/react";
import logo from "../assets/logo.png";
import { mdiMenu, mdiMagnify, mdiClose, mdiLogout } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import { fetchPublicationByKeyWord } from "../api/publications";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export const Header = () => {
	const navigate = useNavigate();
	const [search, setSearch] = useState("");
	const appContext = useContext(AppContext);
	const options = [
		{ title: "Inicio", route: "/" },
		{ title: "Crear publicación", route: "/create-new-publication" },
	];

	async function handleSearch(e, keyWord) {
		e.preventDefault();

		const payload = await fetchPublicationByKeyWord(keyWord);

		appContext.dispatch({
			type: "setPublications",
			payload,
		});
	}

	function resetPublications() {
		setSearch("");
		appContext.dispatch({
			type: "setPublications",
			payload: null,
		});
	}

	useEffect(() => {
		if (!search) resetPublications();
	}, [search]);

	return (
		<nav className=" header navbar navbar-expand-lg">
			<div className="container-fluid">
				<img
					src={logo}
					alt="catinstagram"
					className="logo"
					onClick={() => navigate("/")}
				/>

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
							>
								{option.title}
							</div>
						))}
						<div
							className="search-form"
							style={{ marginLeft: "10px" }}
						>
							<form
								className="d-flex gap-2"
								role="search"
								onSubmit={(e) =>
									handleSearch(e, e.target.search.value)
								}
							>
								<input
									className="form-control me-2"
									placeholder="Buscar"
									aria-label="Search"
									id="search"
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									onKeyDown={(e) =>
										e.key === "Enter" &&
										handleSearch(e, e.target.value)
									}
								></input>
								{search && (
									<button
										className="btn btn-sm btn-search resetSearch"
										onClick={resetPublications}
									>
										<Icon path={mdiClose} size={1} />
									</button>
								)}
								<button
									className="btn btn-sm btn-search"
									type="submit"
								>
									<Icon path={mdiMagnify} size={1} />
								</button>
							</form>
						</div>

						<div className="nav-item logOut">
							<Icon path={mdiLogout} size={1} />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

{
	/* <div className="config">
							<button
								type="button"
								className="btn btn-config dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<Icon path={mdiCog} size={1} />
							</button>
							<ul className="dropdown-menu">
								<li>
									<a className="logOut">Cerrar Sesión</a>
								</li>
								<li>
									<a className="reportProblem">
										Reportar un problema
									</a>
								</li>
							</ul>
						</div> */
}
