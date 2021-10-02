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
const route_user = require("./api/crud/user/router");
const route_pressao = require("./api/crud/pressao/router");
const route_km = require("./api/crud/km/router");
const route_combustivel = require("./api/crud/combustivel/router");
const route_manutencao = require("./api/crud/manutencao/router");

app.get("/", () => {
	return "hello world";
});

app.use("/user", route_user);
app.use("/pressao", route_pressao);
app.use("/km", route_km);
app.use("/combustivel", route_combustivel);
app.use("/manutencao", route_manutencao);

// error handler
app.use((req, res, next) => {
	const error = new Error("Route Not Found");
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
mongoose.connect(db_connection, () => {
	console.log("connected to mongo");
});

//server
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
	console.log(`http://localhost:${port}/`);
});
