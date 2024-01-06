import "../styles/container.css";
import { useContext, useEffect, useState } from "react";
import { PublicationCard } from "./PublicationCard";
import { useNavigate } from "react-router-dom";
import { fetchPublications } from "../ApiMethods";
import { PublicationsContext } from "./PublicationsContext";

export const Container = () => {
	const navigate = useNavigate();
	const [publications, setPublications] = useState([]);
	const publicationsContext = useContext(PublicationsContext);

	const loadPublications = async () => {
		const data = await fetchPublications();
		setPublications(data);
	};

	useEffect(() => {
		loadPublications();
	}, []);

	useEffect(() => {
		if (!publicationsContext.state.publications) {
			loadPublications();
		} else {
			setPublications(publicationsContext.state.publications);
		}
	}, [publicationsContext.state.publications]);

	return (
		<div className="container">
			<div className="row row-cols-3">
				{publications.map((pub) => (
					<PublicationCard
						key={pub._id}
						pub={pub}
						loadPublications={loadPublications}
					/>
				))}
				<div className="card text-center new-publication-card">
					<div className="card-body">
						<h5 className="card-title">Crear nueva publicación</h5>

						<button
							onClick={() => navigate("/create-new-publication")}
							className="btn btn-primary"
						>
							Ir a crear
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
