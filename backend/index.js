import mongoose from "mongoose";

const password = "PWbrGGqjSW5qYQ5t";
const db = `mongodb+srv://cmlpr9:${password}@cluster0.8qcydlx.mongodb.net/Application?retryWrites=true&w=majority`;

export default () =>
	mongoose
		.connect(db)
		.then(() => {
			console.log("Conectado con mongoDB");
		})
		.catch((error) => console.error(error));
