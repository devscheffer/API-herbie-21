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
			type: Number,
			required: true,
		},
		gas_type: {
			type: String,
			required: true,
		},
		volume: {
			type: Number,
			required: true,
		},
		km: {
			type: Number,
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
