const express = require("express");
require("./db/mongoose"); // connect to the database when the app starts
const userRouter = require("./routers/user");

const app = express();

app.use(express.json());
app.use(userRouter);

module.exports = app;
