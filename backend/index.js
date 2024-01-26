import mongoose from "mongoose";

const db = process.env.MONGO_DB;

export default () =>
	mongoose
		.connect(db)
		.then(() => {
			console.log("Conectado con mongoDB");
		})
		.catch((error) => console.error(error));
