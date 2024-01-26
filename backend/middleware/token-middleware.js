import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
	const token = req.headers["authorization"];

	jwt.verify(token, process.env.SECRET, (err, user) => {
		req.user = user;

		if (err) {
			return res
				.status(403)
				.json({ message: "Forbidden: Invalid token" });
		}

		req.user = user;
		next();
	});
};
