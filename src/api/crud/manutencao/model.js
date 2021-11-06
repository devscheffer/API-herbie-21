/** @format */

const mongoose = require("mongoose");

const schema_manutencao = new mongoose.Schema(
	{
		date: {
			type: Date,
			default: Date.now,
			required: true,
		},
		service: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
        place: {
			type: String,
			required: false,
		},
		observation: {
			type: String,
			required: false,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
	},
	{collection: "manutencao"}
);

module.exports = mongoose.model("manutencao", schema_manutencao);
