/** @format */

const obj = require("./model");

// [x] post
exports.post = async (req, res,next) => {
	const obj_post = new obj({
		date: req.body.date,
		id_pneu: req.body.id_pneu,
		pressure: req.body.pressure,
	});

	try {
		const saved_obj_post = await obj_post.save();
		res.status(200).json(saved_obj_post);
	} catch (err) {
		res.status(400).json({message: err});
	}
};

// [x] get_all
exports.get_all = async (req, res,next) => {
	try {
		const obj_all = await obj.find();
		res.status(200).json(obj_all);
	} catch (err) {
		res.status(400).json({message: err});
	}
};

// [x] get_by_id
exports.get_by_id = async (req, res,next) => {
	try {
		const obj_id = await obj.findById(req.params.id);
		res.status(200).json(obj_id);
	} catch (err) {
		res.status(400).json({message: err});
	}
};
// [x] delete
exports.delete = async (req, res,next) => {
	try {
		const obj_delete = await obj.deleteOne({_id: req.params.id});
		res.status(200).json(obj_delete);
	} catch (err) {
		res.status(400).json({message: err});
	}
};
// [x] patch
exports.patch = async (req, res,next) => {
	try {
		const obj_update = await obj.updateOne(
			{_id: req.params.id},
			{
				$set: {
					date: req.body.date,
					id_pneu: req.body.id_pneu,
					pressure: req.body.pressure,
				},
			}
		);
		res.status(200).json(obj_update);
	} catch (err) {
		res.status(400).json({message: err});
	}
};
