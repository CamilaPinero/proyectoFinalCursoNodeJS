import "../styles/newPublication.css";
import { useState } from "react";
import { createPublication } from "../ApiMethods";
import { useNavigate } from "react-router-dom";

export const NewPublication = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		await createPublication({
			title: title,
			description: description,
			image: imageUrl,
		});
		navigate("/");
	}

	return (
		<div className="card-body new-publication-form">
			<div className="card-header">
				<h3>Crear nueva publicación</h3>
			</div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Título de la publicación
					</label>
					<input
						type="text"
						className="form-control"
						id="title"
						aria-describedby="title"
						onChange={(e) => setTitle(e.target.value)}
					></input>
					<div id="titleHelp" className="form-text">
						Ingresa el título de la publicación
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Descripción
					</label>
					<input
						type="text"
						className="form-control"
						id="description"
						onChange={(e) => setDescription(e.target.value)}
					></input>
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="image-url">
						Url de la imagen
					</label>
					<input
						type="text"
						className="form-control"
						id="image-url"
						onChange={(e) => setImageUrl(e.target.value)}
					></input>
				</div>
				<button type="submit" className="btn btn-primary btn-crear">
					Crear publicación
				</button>
			</form>
		</div>
	);
};
