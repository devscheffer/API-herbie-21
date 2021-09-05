/** @format */

const express = require("express");
const router = express.Router();
const obj_pneu = require("./model");

router.post("/", async (req, res) => {
	const new_obj_pneu = new obj_pneu({
		date: req.body.date,
		id_pneu: req.body.id_pneu,
		pressure: req.body.pressure,
	});

	try {
		const saved_pneu = await new_obj_pneu.save();
		res.status(200).json(saved_pneu);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

module.exports = router;
