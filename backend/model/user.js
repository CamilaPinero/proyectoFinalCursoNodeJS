import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
	user: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const User = model("User", userSchema);
export default User;
