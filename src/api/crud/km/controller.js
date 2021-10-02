/** @format */

const model = require("./model");

// [x] post
exports.post = async (req, res, next) => {
	const model_post = new model({
		date: req.body.date,
		km: req.body.km,
		observation: req.body.observation,
	});
	try {
		const saved_model_post = await model_post.save();
		res.status(200).json(saved_model_post);
	} catch (err) {
		res.status(400).json({message: err});
	}
};

// [x] get_all
exports.get_all = async (req, res, next) => {
	try {
		const model_all = await model.find();
		res.status(200).json(model_all);
	} catch (err) {
		res.status(400).json({message: err});
	}
};

// [x] get_by_id
exports.get_by_id = async (req, res, next) => {
	try {
		const model_id = await model.findById(req.params.id);
		if(model_id){
            res.status(200).json(model_id);
        }else{
            res.status(404).json({message: "not found"});
        };
	} catch (err) {
		res.status(400).json({message: err});
	}
};
// [x] delete
exports.delete = async (req, res,next) => {
	try {
		const model_delete = await model.deleteOne({_id: req.params.id});
		res.status(200).json(model_delete);
	} catch (err) {
		res.status(400).json({message: err});
	}
};
// [x] patch
exports.patch = async (req, res, next) => {
	try {
		const model_update = await model.updateOne(
			{_id: req.params.id},
			{
				$set: {
					date: req.body.date,
					km: req.body.km,
					observation: req.body.observation,
				},
			}
		);
		res.status(200).json(model_update);
	} catch (err) {
		res.status(400).json({message: err});
	}
};
