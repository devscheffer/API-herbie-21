/** @format */

const model = require("./model");
const bcrypt = require("bcrypt");

// [x] post
exports.signup = async (req, res, next) => {
	try {
		const model_check = await model.find({email: req.body.email});

		if (model_check.length >= 1) {
			return res.status(409).json({
				message: "User already exists",
			});
		} else {
			bcrypt.hash(req.body.password, 10, async (err, hash) => {
				const model_post = new model({
					email: req.body.email,
					password: hash,
				});

				const saved_model_post = await model_post.save();
				res.status(201).json({
					message: "User created successfully",
					model: saved_model_post,
				});
			});
		}
	} catch (err) {
		res.status(500).json({
			error: err,
		});
	}
};

// [x] delete
exports.delete = async (req, res, next) => {
	try {
		const model_delete = await model.deleteOne({_id: req.params.id});
		res.status(200).json({
			message: "User deleted successfully",
			model: model_delete,
		});
	} catch (err) {
		res.status(400).json({message: err});
	}
};
