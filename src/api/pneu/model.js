/** @format */

const mongoose = require("mongoose");

const schema_pneu = new mongoose.Schema(
	{
		date: {
			type: Date,
			default: Date.now,
		},
		id_pneu: {
			type: String,
			required: true,
		},
		pressure: {
			type: Number,
			required: true,
		},
	},
	{collection: "pneu"}
);

module.exports = mongoose.model("pneu", schema_pneu);
