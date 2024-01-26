/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "../styles/fullPublication.css";
import { useEffect, useState } from "react";
import {
	deletePublication,
	editPublication,
	fetchPublicationById,
} from "../api/publications";
import { createComment } from "../api/comments";
import { useNavigate, useParams } from "react-router-dom";
import { Comment } from "./Comment";
import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";
import toast, { Toaster } from "react-hot-toast";

export const FullPublication = () => {
	const [user, setUser] = useState("");
	const [content, setContent] = useState("");
	const [showSend, setShowSend] = useState(false);
	const [showEditPublication, setShowEditPublication] = useState(false);
	const [publication, setPublication] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	async function loadPublication() {
		const data = await fetchPublicationById(id);
		setPublication(data);
	}

	async function handleDeletePublication(id) {
		await deletePublication(id);
		navigate("/");
	}

	async function handleEditPublication(e, id) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		await editPublication(id, formProps);
		await loadPublication();
		setShowEditPublication(false);
		toast.success("Publicación actualizada!");
	}

	async function handleSendComment() {
		if (content === "") {
			return;
		} else {
			await createComment(id, {
				user: user,
				content: content,
			});
			setContent("");
			await loadPublication();
		}
	}

	useEffect(() => {
		loadPublication();
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
										data-bs-toggle="dropdown"
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
							<h6 className="username">{publication.user}</h6>
							{publication.userId ===
								localStorage.getItem("userId") && (
								<div className="dropdown">
									<button
										className="btn dropdown-toggle btn-sm setting-publication"
										type="button"
										id="dropdownMenuButton"
										data-bs-toggle="dropdown"
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
							)}
						</div>

						<div className="card-body">
							<p>{publication.description}</p>
							<img
								src={publication.image}
								className="card-img-full"
							></img>

							<div>
								<h5>Comentarios</h5>
								{publication &&
									publication.comments &&
									publication.comments.map((com, i) => (
										<Comment
											i={i}
											key={com._id}
											pub={publication}
											com={com}
											user={user}
											content={content}
											setContent={setContent}
											loadPublication={loadPublication}
										/>
									))}
							</div>
							<div className="comment-box-send">
								<input
									className="form-control comment-send"
									type="text"
									placeholder="agregar un comentario"
									onClick={() => setShowSend(!showSend)}
									value={content}
									onChange={(e) => setContent(e.target.value)}
								/>
								{showSend && (
									<button
										className="btn-sm btn btn-comment-send"
										onClick={() =>
											handleSendComment(publication._id)
										}
									>
										Enviar
									</button>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
			<Toaster />
		</>
	);
};
