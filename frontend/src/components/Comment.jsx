/* eslint-disable react/prop-types */
import "../styles/comment.css";
import { deleteComment, editComment } from "../api/comments";
import PropTypes from "prop-types";
//import { useState } from "react";

export const Comment = (props) => {
	async function handleEditComment(commentId) {
		await editComment(commentId, {
			content: props.content,
		});
		props.setContent("");
		await props.loadPublication();

		props.setSelectedComment("");
	}

	async function handleDeleteComment(commentId) {
		await deleteComment(commentId);
		await props.loadPublication();
	}

	return (
		<>
			<div className="card-body comment">
				{props.selectedComment === props.com._id ? (
					<div className="d-flex flex-start">
						<img
							className="rounded-circle shadow-1-strong me-3"
							src={`https://ui-avatars.com/api/?name=${props.com.user}&background=random`}
							alt="avatar"
						/>
						<div className="mb-1">
							<div className="d-flex comment-header">
								<h6>{props.com.user}</h6>
								<button
									className="btn btn-sm"
									onClick={() => props.setSelectedComment("")}
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
					<div className="d-flex">
						<div className=" mb-1 ">
							<div className="d-flex comment-header">
								<img
									className="rounded-circle shadow-1-strong me-3"
									src={`https://ui-avatars.com/api/?name=${props.com.user}&background=random`}
									alt="avatar"
								/>
								<h6 className="commentUser">
									{props.com.user}
								</h6>
								{props.com.userId ===
									localStorage.getItem("userId") && (
									<button
										className="btn btn-sm edit"
										onClick={() =>
											props.setSelectedComment(
												props.com._id
											)
										}
									>
										editar
									</button>
								)}
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

Comment.PropTypes = {
	content: PropTypes.string.isRequired,
	setContent: PropTypes.func.isRequired,
	selectedComment: PropTypes.string.isRequired,
	setSelectedComment: PropTypes.func.isRequired,
	loadPublication: PropTypes.func.isRequired,
	pub: PropTypes.any.isRequired,
	com: PropTypes.any.isRequired,
};
