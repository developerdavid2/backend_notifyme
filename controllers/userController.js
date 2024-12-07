const fs = require("fs");
const path = require("path");
const sendEmail = require("../utils/sendEmail");

exports.subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    // Read the HTML file from the root folder
    const messagePath = path.join(__dirname, "..", "email.html");
    let message = fs.readFileSync(messagePath, "utf8");

    // Optionally replace placeholders with dynamic data
    message = message.replace("{{email}}", email);

    await sendEmail({
      sender: process.env.EMAIL_USERNAME,
      email,
      subject: "Thank You for Subscribing!",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Subscription successful!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "An error occurred while subscribing. Please try again.",
    });
  }
};
