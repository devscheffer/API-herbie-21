/** @format */

require('dotenv/config');
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// middleware

app.use(express.json());

// router

app.use("/pressao", require("./api/pressao/router"));
app.use("/user", require("./api/user/router"));

// database

mongoose.connect(process.env.db_connection, () => {
	console.log("connected to mongo");
});

//server
const port = process.env.port || 3000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
	console.log(`http://localhost:${port}/`);
});
