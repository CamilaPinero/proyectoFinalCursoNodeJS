/* eslint-disable react/prop-types */

//mostrar solo 2 renglones de descripcion ??
//cambiar mostrar comentarios por ver mas y que lleve a otra pagina con la publicacion completa
//mover comentarios a un componente aparte, terminar el editar comentario
//agregar fechas de creacion de publicacion y comentarios, componentes para otras paginas del menu (en configuracion podria ir tema)

import "../styles/publication.css";
import { useState } from "react";
import {
	createComment,
	deleteComment,
	deletePublication,
	editPublication,
} from "../ApiMethods";
import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";

export const Publication = (props) => {
	const [showComments, setShowComments] = useState(false);
	const [showSend, setShowSend] = useState(false);
	const [user, setUser] = useState("userDePrueba");
	const [content, setContent] = useState("");
	const [showEditPublication, setShowEditPublication] = useState(false);
	const [showEditComment, setShowEditComment] = useState(false);

	async function handleDeletePublication(publicationId) {
		await deletePublication(publicationId);
		await props.loadPublications();
	}
	//no anda xq no se si tengo que volver a declarar los estados para los tres campos y tomando los values del form no lo hice andar
	async function handleEditPublication(e, publicationId) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		await editPublication(publicationId, formProps);
		await props.loadPublications();
		setShowEditPublication(false);
	}

	async function handleSendComment(publicationId) {
		await createComment(publicationId, {
			user: user,
			content: content,
		});
		setContent("");
		await props.loadPublications();
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
		await props.loadPublications();
	}

	return (
		<>
			{showEditPublication ? (
				<div key={props.pub._id} className="card publication">
					<form
						onSubmit={(e) =>
							handleEditPublication(e, props.pub._id)
						}
					>
						<div className="card-header">
							<input
								className="form-control"
								id="title"
								name="title"
								aria-describedby="title"
								defaultValue={props.pub.title}
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
												props.pub._id
											)
										}
									>
										Eliminar
									</button>
								</div>
							</div>
						</div>

						<div className="card-body">
							<input
								className="form-control"
								defaultValue={props.pub.description}
								id="description"
								name="description"
							/>
							<input
								type="text"
								className="form-control"
								id="image-url"
								name="image"
								defaultValue={props.pub.image}
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
				<div key={props.pub._id} className="card publication">
					<div className="card-header">
						<h5 className="card-title">{props.pub.title}</h5>

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
									onClick={() => setShowEditPublication(true)}
								>
									Editar
								</button>
								<button
									className="dropdown-option"
									onClick={() =>
										handleDeletePublication(props.pub._id)
									}
								>
									Eliminar
								</button>
							</div>
						</div>
					</div>

					<div className="card-body">
						<p className="card-text">{props.pub.description}</p>
						<img src={props.pub.image} className="card-img"></img>
						{showComments ? (
							<>
								<div>
									<h5>Comentarios</h5>
									{props.pub.comments.map((com, i) => (
										<div
											className="card-body comment"
											key={com._id}
										>
											{showEditComment ? (
												<div className="d-flex flex-start">
													<img
														className="rounded-circle shadow-1-strong me-3"
														src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
														alt="avatar"
													/>
													<div className=" mb-1 ">
														<div className="d-flex comment-header">
															<h6>{com.user}</h6>
															<button
																className="btn btn-sm"
																onClick={() =>
																	setShowEditComment(
																		false
																	)
																}
															>
																cancelar
															</button>
															<button
																className="btn btn-sm"
																onClick={() =>
																	handleDeleteComment(
																		com._id
																	)
																}
															>
																borrar
															</button>
														</div>
														<input
															className="form-control"
															value={com.content}
														/>
													</div>
												</div>
											) : (
												<div className="d-flex flex-start">
													<img
														className="rounded-circle shadow-1-strong me-3"
														src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
														alt="avatar"
													/>
													<div className=" mb-1 ">
														<div className="d-flex comment-header">
															<h6>{com.user}</h6>
															<button
																className="btn btn-sm"
																onClick={() =>
																	setShowEditComment(
																		true
																	)
																}
															>
																editar
															</button>
															<button
																className="btn btn-sm"
																onClick={() =>
																	handleDeleteComment(
																		com._id
																	)
																}
															>
																borrar
															</button>
														</div>
														<p className="mb-0">
															{com.content}
														</p>
													</div>
												</div>
											)}
											{!(
												i + 1 ===
												props.pub.comments.length
											) && <hr className="my-0" />}
										</div>
									))}
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
											handleSendComment(props.pub._id)
										}
									>
										Enviar
									</button>
								)}
							</>
						) : (
							""
						)}
						<button
							onClick={() => setShowComments(!showComments)}
							className="btn btn-primary"
						>
							{showComments ? "Ocultar" : "Mostrar"} comentarios
						</button>
					</div>
				</div>
			)}
		</>
	);
};
