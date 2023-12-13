import { useState } from "react";

export const Publication = (props) => {
	const [showComments, setShowComments] = useState(false);

	return (
		<>
			<div key={props.pub._id} className="card">
				<img src={props.pub.image} className="card-img-top"></img>
				<div className="card-body">
					<h5 className="card-title">{props.pub.title}</h5>
					<p className="card-text">{props.pub.description}</p>
					{showComments ? (
						<>
							<div className="">
								{props.pub.comments.map((com) => (
									<div key={com._id} className="comment">
										<h6>{com.user}</h6>
										<p>{com.content}</p>
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
