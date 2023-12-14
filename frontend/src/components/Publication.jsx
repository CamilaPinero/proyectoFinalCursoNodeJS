//agregar fechas de creacion de publicacion y comentarios, arreglar el grid para que encastren, agregar funcion a comentarios, agregar espacio para crear publicaciones, componentes para otras paginas del menu (en configuracion podria ir tema xej)

import { useState } from "react";
export const Publication = (props) => {
	const [showComments, setShowComments] = useState(false);

	return (
		<>
			<div key={props.pub._id} className="card publication">
				<h5 className="card-title">{props.pub.title}</h5>
				<div className="card-body">
					<p className="card-text">{props.pub.description}</p>
					<img src={props.pub.image} className="card-img"></img>
					{showComments ? (
						<>
							<div>
								<h5>Comentarios</h5>
								{props.pub.comments.map((com) => (
									<div
										className="card-body comment"
										key={com._id}
									>
										<div className="d-flex flex-start">
											<img
												className="rounded-circle shadow-1-strong me-3"
												src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
												alt="avatar"
											/>
											<div className=" mb-1 ">
												<div className="d-flex comment-header">
													<h6>{com.user}</h6>
													<button className="btn btn-sm">
														editar
													</button>
													<button className="btn btn-sm">
														borrar
													</button>
												</div>
												<p className="mb-0">
													{com.content}
												</p>
											</div>
										</div>

										<hr className="my-0" />
									</div>
								))}
							</div>
							<input
								className="form-control"
								type="text"
								placeholder="agregar un comentario"
							/>
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
		</>
	);
};
