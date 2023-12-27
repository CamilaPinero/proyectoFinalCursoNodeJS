/* eslint-disable react/prop-types */
import "../styles/comment.css";
import { useState } from "react";
import { deleteComment, editComment } from "../ApiMethods";

export const Comment = (props) => {
	const [showEditComment, setShowEditComment] = useState(false);

	async function handleEditComment(commentId) {
		await editComment(commentId, {
			user: props.user,
			content: props.content,
		});
		await props.loadPublication();
		setShowEditComment(false);
	}

	async function handleDeleteComment(commentId) {
		await deleteComment(commentId);
		await props.loadPublication();
	}

	return (
		<>
			<div className="card-body comment">
				{showEditComment ? (
					<div className="d-flex flex-start">
						<img
							className="rounded-circle shadow-1-strong me-3"
							src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
							alt="avatar"
						/>
						<div className=" mb-1 ">
							<div className="d-flex comment-header">
								<h6>{props.pub.user}</h6>
								<button
									className="btn btn-sm"
									onClick={() => setShowEditComment(false)}
								>
									cancelar
								</button>
								<button
									className="btn btn-sm"
									onClick={() =>
										handleDeleteComment(props.com._id)
									}
								>
									borrar
								</button>
							</div>
							<div className="comment-box">
								<input
									className="form-control"
									id="comment-edit"
									defaultValue={props.com.content}
									onChange={(e) =>
										props.setContent(e.target.value)
									}
								/>
								<button
									className="btn-sm btn btn-comment-edit"
									onClick={() =>
										handleEditComment(props.com._id)
									}
								>
									Enviar
								</button>
							</div>
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
								<h6 className="commentUser">
									{props.com.user}
								</h6>
								<button
									className="btn btn-sm"
									onClick={() => setShowEditComment(true)}
								>
									editar
								</button>
							</div>
							<p className="mb-0">{props.com.content}</p>
						</div>
					</div>
				)}
				{!(props.i + 1 === props.pub.comments.length) && (
					<hr className="my-0" />
				)}
			</div>
		</>
	);
};
