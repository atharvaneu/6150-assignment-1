const express = require("express");
require("./db/mongoose"); // connect to the database when the app starts
const userRouter = require("./routers/user");
const serverUtils = require("./routers/index");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(serverUtils);

module.exports = app;
