import "../styles/newPublication.css";
import { useState } from "react";
import { createPublication } from "../api/publications";

import { toast, Toaster } from "react-hot-toast";

export const NewPublication = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		if (title === "" || description === "") {
			toast.error("Ingrese el título y descripción de la publicación", {
				duration: 4000,
			});
			return;
		} else {
			e.preventDefault();
			await createPublication({
				title: title,
				description: description,
				image: imageUrl,
			});

			toast.success(
				<div>
					Publicación creada! <a href="/">Volver al inicio</a>
				</div>
			);
		}
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
						data-toggle="tooltip"
						data-placement="right"
						title="Elegí un título para tu publicación sobre gatos"
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
					<textarea
						type="text"
						className="form-control"
						cols="50"
						rows="10"
						id="description"
						data-toggle="tooltip"
						data-placement="right"
						title="Escribí una descripción para tu publicación sobre gatos"
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
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
						data-toggle="tooltip"
						data-placement="right"
						title="Copiá el link de una imagen de gatos que te guste y pegalo acá"
					></input>
				</div>
				<button type="submit" className="btn btn-primary btn-crear">
					Crear publicación
				</button>
			</form>
			<Toaster />
		</div>
	);
};
