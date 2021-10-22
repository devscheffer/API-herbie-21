/** @format */

const jwt = require("jsonwebtoken");
const filter_role = require("./check_role");

module.exports = (req, res, next) => {
	try {
        const token = req.headers.authorization.split(" ")[1];
		const decoded = jwt.verify(token, process.env.JWT_KEY);
		req.user_data = decoded;
        req.filter_role = filter_role(req);
		next();
	} catch (error) {
		return res.status(401).json({
			message: "Auth failed",
		});
	}
};
