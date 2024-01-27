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

		if (user) {
			const isPasswordMatch = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (isPasswordMatch) {
				const token = jwt.sign({ user: user }, process.env.SECRET, {
					expiresIn: "1h",
				});
				const userId = user._id;
				const userName = user.user;
				return res.json({ token, userId, userName });
			} else {
				//return res.json("contraseña incorrecta");
				throw new Error("La contraseña ingresada es incorrecta");
			}
		} else {
			//return res.json("usuario incorrecto");
			throw new Error("El usuario ingresado es incorrecto");
		}
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
};

export { createUser, logIn };
