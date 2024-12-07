const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Define your route
router.post("/subscribe", userController.subscribe);

// Export the router
module.exports = router;
