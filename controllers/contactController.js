const sendMail = require("../utils/sendMail");
const Contact = require("../models/Contact");


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



exports.saveContact = async (req, res) => {
  try {
    const data = req.body;

    let contact = await Contact.findOne();

    if (contact) {
      contact = await Contact.findByIdAndUpdate(
        contact._id,
        data,
        { new: true, runValidators: true }
      );
    } else {
      contact = await Contact.create(data);
    }

    return res.status(200).json({
      success: true,
      message: "Contact page saved successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Save Contact Page Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact page content not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Get Contact Page Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
