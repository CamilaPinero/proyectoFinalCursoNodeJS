import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createUser = async (req, res) => {
	try {
		const password = req.body.password;
		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			user: req.body.user,
			password: hashedPassword,
		});
		res.json(user);
	} catch (error) {
		console.error(error);
	}
};

const logIn = async (req, res) => {
	try {
		const user = await User.findOne({
			user: req.body.user,
		});
		const isPasswordMatch = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (isPasswordMatch) {
			const token = jwt.sign({ user: user.user }, process.env.SECRET, {
				expiresIn: "1h",
			});

			return res.json({ token });
		} else {
			return res.json("contraseña incorrecta");
		}
	} catch (error) {
		console.error(error);
	}
};

export { createUser, logIn };
