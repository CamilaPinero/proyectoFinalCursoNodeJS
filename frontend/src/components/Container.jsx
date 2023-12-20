import "../styles/container.css";
import { useEffect, useState } from "react";
import { Publication } from "./Publication";
import { useNavigate } from "react-router-dom";
import { fetchPublications } from "../ApiMethods";

export const Container = () => {
	const navigate = useNavigate();
	const [publications, setPublications] = useState([]);

	const loadPublications = async () => {
		const data = await fetchPublications();
		setPublications(data);
	};

	useEffect(() => {
		loadPublications();
	}, []);

	return (
		<div className="container">
			<div className="row row-cols-3">
				{publications.map((pub) => (
					<Publication
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
