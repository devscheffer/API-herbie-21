/** @format */

require("dotenv/config");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const morgan = require("morgan");

// log
app.use(morgan("dev"));

// middleware
app.use(express.json());

// router
app.use("/pressao", require("./api/pressao/router"));
app.use("/user", require("./api/user/router"));
app.get("/", () => {
	return "hello world";
});
// error handler
app.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		message: err.message,
	});
});

// database
const db_connection = `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_password}@cluster0.3yhxp.mongodb.net/herbie-21`;

console.log(db_connection);
mongoose.connect(db_connection, () => {
	console.log("connected to mongo");
});

//server
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
	console.log(`http://localhost:${port}/`);
});
