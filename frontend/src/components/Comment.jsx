import { useState } from "react";

export const Comment = (props) => {
	const [showEditComment, setShowEditComment] = useState(false);

	return (
		<>
			{props.pub.comments.map((com, i) => (
				<div className="card-body comment" key={com._id}>
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
											setShowEditComment(false)
										}
									>
										cancelar
									</button>
									<button
										className="btn btn-sm"
										onClick={() =>
											handleDeleteComment(com._id)
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
										onClick={() => setShowEditComment(true)}
									>
										editar
									</button>
									<button
										className="btn btn-sm"
										onClick={() =>
											handleDeleteComment(com._id)
										}
									>
										borrar
									</button>
								</div>
								<p className="mb-0">{com.content}</p>
							</div>
						</div>
					)}
					{!(i + 1 === props.pub.comments.length) && (
						<hr className="my-0" />
					)}
				</div>
			))}
		</>
	);
};
