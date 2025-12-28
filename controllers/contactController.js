const sendMail = require("../utils/sendMail");

exports.sendContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await sendMail({ name, email, subject, message });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Mail Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};
