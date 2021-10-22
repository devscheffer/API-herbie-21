/** @format */

const model = require("./model");
const filter_role = require("../../middleware/check_role");

// [x] post
exports.post = async (req, res, next) => {
	try {
		const model_post = await model.create({
			...req.body,
			user: req.user_data.userId,
		});
		res.status(201).json(model_post);
	} catch (err) {
		res.status(400).json({message: err});
	}
};

// [x] get_all
exports.get_all = async (req, res, next) => {
	try {
		filter = req.filter_role;
		const model_all = await model.find({...filter}).populate("user");
		res.status(200).json(model_all);
	} catch (err) {
		res.status(400).json({message: err});
	}
};

// [x] get_by_id
exports.get_by_id = async (req, res, next) => {
	try {
		filter = req.filter_role;
		const model_id = await model
			.findOne({_id: req.params.id, ...filter})
			.populate("user");
		if (model_id) {
			res.status(200).json(model_id);
		} else {
			res.status(404).json({message: "not found"});
		}
	} catch (err) {
		res.status(400).json({message: err});
	}
};
// [x] delete
exports.delete = async (req, res, next) => {
	try {
		filter = req.filter_role;
		const model_delete = await model.findOneAndDelete({
			_id: req.params.id,
			...filter,
		});
		res.status(200).json(model_delete);
	} catch (err) {
		res.status(400).json({message: err});
	}
};
// [x] patch
exports.patch = async (req, res, next) => {
	try {
		filter = req.filter_role;
		const model_update = await model.findOneAndUpdate(
			{_id: req.params.id, ...filter},
			{
				$set: {
					date: req.body.date,
					position: req.body.position,
					pressure: req.body.pressure,
					observation: req.body.observation,
				},
			}
		);
		res.status(200).json(model_update);
	} catch (err) {
		res.status(400).json({message: err});
	}
};
