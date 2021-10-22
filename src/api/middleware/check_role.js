/** @format */

function filter_role(req) {
	let filter = {};
	if (req.user_data.role === "admin") {
		filter = {};
	} else {
		filter = {user: req.user_data.userId};
	}
	return filter;
}


module.exports = filter_role;
