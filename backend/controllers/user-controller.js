import User from "../model/user.js";
import bcrypt from "bcrypt";

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
//se rompe en el compare pero devuelve bien la rta
const compareUser = async (req, res) => {
	try {
		const user = await User.findOne({
			user: req.body.user,
		});

		const isPasswordMatch = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (isPasswordMatch) {
			return res.json("contraseña correcta");
		} else {
			return res.json("contraseña incorrecta");
		}
	} catch (error) {
		console.error(error);
	}
};

export { createUser, compareUser };
