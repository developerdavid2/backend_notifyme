const express = require("express");
const emailRouter = require("./routes/emailRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// 1) GLOBAL MIDDLEWARES

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// 3) ROUTES
app.use("/api/v1/newsletter", emailRouter);

module.exports = app;
