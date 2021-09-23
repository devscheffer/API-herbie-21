/** @format */

require('dotenv/config');
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// middleware

app.use(express.json());

// route

app.use("/pneu", require("./api/pneu/router"));
app.use("/user", require("./api/user/router"));

// database

mongoose.connect(process.env.db_connection, () => {
	console.log("connected to mongo");
});

//server
app.listen(3000, () => {
	let port = 3000;
	console.log(`Server started on port ${port}`);
	console.log(`http://localhost:${port}/`);
});
