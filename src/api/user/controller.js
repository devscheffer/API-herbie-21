/** @format */

const model = require("./model");
const bcrypt = require("bcrypt");
// [x] post
exports.post = async (req, res, next) => {
	try {
		const obj_one = await model.find({email: req.body.email});

		if (obj_one.length >= 1) {
			return res.status(409).json({
				message: "User already exists",
			});
		} else {
			bcrypt.hash(req.body.password, 10, async (err, hash) => {
				const obj_post = new model({
					email: req.body.email,
					password: hash,
				});

				const saved_obj_post = await obj_post.save();
				res.status(201).json({
					message: "User created successfully",
					obj: saved_obj_post,
				});
			});
		}
	} catch (err) {
		res.status(500).json({
			error: err,
		});
	}
};
// [x] get_all
// exports.get_all = async (req, res,next) => {
// 	try {
// 		const obj_all = await obj.find();
// 		res.status(200).json(obj_all);
// 	} catch (err) {
// 		res.status(400).json({message: err});
// 	}
// };

// // [x] get_by_id
// exports.get_by_id = async (req, res,next) => {
// 	try {
// 		const obj_id = await obj.findById(req.params.id);
// 		res.status(200).json(obj_id);
// 	} catch (err) {
// 		res.status(400).json({message: err});
// 	}
// };
// [x] delete
exports.delete = async (req, res, next) => {
	try {
		const obj_delete = await model.deleteOne({_id: req.params.id});
		res.status(200).json({
			message: "User deleted successfully",
			obj: obj_delete,
		});
	} catch (err) {
		res.status(400).json({message: err});
	}
};
// // [x] patch
// exports.patch = async (req, res,next) => {
// 	try {
// 		const obj_update = await obj.updateOne(
// 			{_id: req.params.id},
// 			{
// 				$set: {
// 					date: req.body.date,
// 					id_pneu: req.body.id_pneu,
// 					pressure: req.body.pressure,
// 				},
// 			}
// 		);
// 		res.status(200).json(obj_update);
// 	} catch (err) {
// 		res.status(400).json({message: err});
// 	}
// };
