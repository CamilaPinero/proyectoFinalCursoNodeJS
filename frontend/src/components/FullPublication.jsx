import "../styles/fullPublication.css";
import { useEffect, useState } from "react";
import {
	deletePublication,
	editPublication,
	fetchPublicationById,
	createComment,
	deleteComment,
} from "../ApiMethods";
import { useParams } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";

export const FullPublication = () => {
	const [user, setUser] = useState("userDePrueba");
	const [content, setContent] = useState("");
	const [showSend, setShowSend] = useState(false);
	const [showEditPublication, setShowEditPublication] = useState(false);
	const [publication, setPublication] = useState({});
	const { id } = useParams();

	async function loadPublication() {
		const data = await fetchPublicationById(id);

		setPublication(data);
	}

	async function handleDeletePublication(id) {
		await deletePublication(id);
		await loadPublication();
	}

	async function handleEditPublication(e, id) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		await editPublication(id, formProps);
		await loadPublication();
		setShowEditPublication(false);
	}

	async function handleSendComment() {
		await createComment(id, {
			user: user,
			content: content,
		});
		setContent("");
		await loadPublication();
	}

	async function handleEditComment(commentId) {
		/*
		falta armar el editor del comentario!!
		 await editComment(commentId, {
			user: user,
			content: content,
		}); */
	}

	async function handleDeleteComment(commentId) {
		await deleteComment(commentId);
		await loadPublication();
	}

	useEffect(() => {
		loadPublication();
		console.log(id);
	}, []);

	return (
		<>
			<div className="container">
				{showEditPublication ? (
					<div
						key={publication._id}
						className="card full-publication"
					>
						<form
							onSubmit={(e) =>
								handleEditPublication(e, publication._id)
							}
						>
							<div className="card-header">
								<input
									className="form-control"
									id="title"
									name="title"
									aria-describedby="title"
									defaultValue={publication.title}
								/>

								<div className="dropdown">
									<button
										className="btn dropdown-toggle btn-sm setting-publication"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<Icon
											className="setting"
											path={mdiCog}
											size={0.8}
										/>
									</button>
									<div
										className="dropdown-menu"
										aria-labelledby="dropdownMenuButton"
									>
										<button
											className="dropdown-option"
											onClick={() =>
												handleDeletePublication(
													publication._id
												)
											}
										>
											Eliminar
										</button>
									</div>
								</div>
							</div>

							<div className="card-body">
								<textarea
									className="form-control"
									defaultValue={publication.description}
									id="description"
									name="description"
								/>
								<input
									type="text"
									className="form-control"
									id="image-url"
									name="image"
									defaultValue={publication.image}
								/>
								<div className="buttons">
									<button
										className="btn btn-secondary"
										onClick={() =>
											setShowEditPublication(false)
										}
									>
										Cancelar
									</button>
									<button
										type="submit"
										className="btn btn-primary"
									>
										Editar publicación
									</button>
								</div>
							</div>
						</form>
					</div>
				) : (
					<div
						key={publication._id}
						className="card full-publication"
					>
						<div className="card-header">
							<h5 className="card-title">{publication.title}</h5>

							<div className="dropdown">
								<button
									className="btn dropdown-toggle btn-sm setting-publication"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<Icon
										className="setting"
										path={mdiCog}
										size={0.8}
									/>
								</button>
								<div
									className="dropdown-menu"
									aria-labelledby="dropdownMenuButton"
								>
									<button
										className="dropdown-option"
										onClick={() =>
											setShowEditPublication(true)
										}
									>
										Editar
									</button>
									<button
										className="dropdown-option"
										onClick={() =>
											handleDeletePublication(
												publication._id
											)
										}
									>
										Eliminar
									</button>
								</div>
							</div>
						</div>

						<div className="card-body">
							<p>{publication.description}</p>
							<img
								src={publication.image}
								className="card-img-full"
							></img>

							<div>
								<h5>Comentarios</h5>
							</div>
							<input
								className="form-control"
								type="text"
								placeholder="agregar un comentario"
								onClick={() => setShowSend(!showSend)}
								defaultValue={content}
								onChange={(e) => setContent(e.target.value)}
							/>
							{showSend && (
								<button
									className="btn-sm btn"
									onClick={() =>
										handleSendComment(publication._id)
									}
								>
									Enviar
								</button>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
};
