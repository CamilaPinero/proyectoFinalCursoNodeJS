/* eslint-disable react/prop-types */

//arreglar card width no responsive
//que no se puedan agregar publicaciones o comentarios vacios
//agregar fechas de creacion de publicacion y comentarios, componentes para otras paginas del menu (en configuracion podria ir tema)

import "../styles/publicationCard.css";
import { useNavigate } from "react-router-dom";

export const PublicationCard = (props) => {
	const navigate = useNavigate();

	return (
		<>
			<div key={props.pub._id} className="card publication">
				<div className="card-header">
					<h5 className="card-title">{props.pub.title}</h5>
				</div>

				<div className="card-body">
					<p className="card-text">{props.pub.description}</p>
					<a
						onClick={() =>
							navigate(`/publication/${props.pub._id}`)
						}
					>
						ver mas
					</a>
					<img src={props.pub.image} className="card-img"></img>

					<button
						className="btn btn-primary"
						onClick={() =>
							navigate(`/publication/${props.pub._id}`)
						}
					>
						Ver publicación completa
					</button>
				</div>
			</div>
		</>
	);
};
