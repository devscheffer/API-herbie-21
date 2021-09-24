/** @format */

const mongoose = require("mongoose");

const schema_pressao = new mongoose.Schema(
	{
		date: {
			type: Date,
			default: Date.now,
			required: true,

		},
		position: {
			type: String,
			required: true,
		},
		pressure: {
			type: Number,
			required: true,
		},
	},
	{collection: "pressao"}
);

module.exports = mongoose.model("pressao", schema_pressao);
