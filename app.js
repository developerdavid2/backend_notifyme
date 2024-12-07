const express = require("express");
const emailRouter = require("./routes/emailRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// 1) GLOBAL MIDDLEWARES

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(bodyParser.json());

// Dynamic CORS Configuration
const whitelist = [
  "http://localhost:5174", // For local development
  "https://notifymekit.vercel.app", // For production
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      // Allow requests with no origin (e.g., mobile apps, Postman) or listed origins
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

// 3) ROUTES
app.use("/api/v1/newsletter", emailRouter);

module.exports = app;
