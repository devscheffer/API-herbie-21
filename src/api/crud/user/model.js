/** @format */

const mongoose = require("mongoose");

const schema_user = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
			enum: ["admin", "user"],
		},
	},
	{collection: "user"}
);

module.exports = mongoose.model("user", schema_user);
