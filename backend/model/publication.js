import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const publicationSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			default: "",
		},
		comments: [
			{
				user: String,
				content: String,
			},
		],
	},
	{ timestamps: true }
);

const Publication = model("Publication", publicationSchema);
export default Publication;
