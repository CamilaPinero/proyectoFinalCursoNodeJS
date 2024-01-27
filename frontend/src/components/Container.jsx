import "../styles/container.css";
import { useContext, useEffect, useState } from "react";
import { PublicationCard } from "./PublicationCard";
import { useNavigate } from "react-router-dom";
import { fetchPublications } from "../api/publications";
import { AppContext } from "./AppContext";

export const Container = () => {
	const navigate = useNavigate();
	const [publications, setPublications] = useState([]);
	const appContext = useContext(AppContext);
	const [loading, setLoading] = useState(false);
	const loadPublications = async () => {
		setLoading(true);
		const data = await fetchPublications();
		setPublications(data);
		setLoading(false);
	};

	useEffect(() => {
		loadPublications();
	}, []);

	useEffect(() => {
		if (!appContext.state.publications) {
			loadPublications();
		} else {
			setPublications(appContext.state.publications);
		}
	}, [appContext.state.publications]);

	return (
		<div className="container">
			{loading ? (
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			) : (
				<div className="row row-cols-3">
					{publications &&
						publications.map((pub) => (
							<PublicationCard
								key={pub._id}
								pub={pub}
								loadPublications={loadPublications}
							/>
						))}
					{!appContext.state.publications && (
						<div className="card text-center new-publication-card">
							<div className="card-body">
								<h5 className="card-title">
									Crear nueva publicación
								</h5>

								<button
									onClick={() =>
										navigate("/create-new-publication")
									}
									className="btn btn-primary"
								>
									Ir a crear
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};
