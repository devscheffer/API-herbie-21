/** @format */

const mongoose = require("mongoose");

const schema_combustivel = new mongoose.Schema(
	{
		date: {
			type: Date,
			default: Date.now,
			required: true,
		},
		price: {
			type: number,
			required: true,
		},
		gas_type: {
			type: string,
			required: true,
		},
		volume: {
			type: number,
			required: true,
		},
		km: {
			type: number,
			required: true,
		},
		observation: {
			type: String,
			required: false,
		},
	},
	{collection: "combustivel"}
);

module.exports = mongoose.model("combustivel", schema_combustivel);
