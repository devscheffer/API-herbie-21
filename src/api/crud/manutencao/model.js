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
        observation:{
            type: String,
            required: false,
        }
	},
	{collection: "manutencao"}
);

module.exports = mongoose.model("manutencao", schema_manutencao);
