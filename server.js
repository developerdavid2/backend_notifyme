const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: "./config.env" });

// Import the app instance
const app = require("./app");

// Add a root route to display the welcome message
app.get("/", (req, res) => {
  res.send("Welcome to NotifyMe API built with Node and Express!");
});

// Start the server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
