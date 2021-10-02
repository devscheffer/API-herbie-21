/** @format */

const mongoose = require("mongoose");

const schema_km = new mongoose.Schema(
	{
		date: {
			type: Date,
			default: Date.now,
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
	{collection: "km"}
);

module.exports = mongoose.model("km", schema_km);
