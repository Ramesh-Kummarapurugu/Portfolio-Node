const express = require("express");
const { sendContactMessage,  saveContact, getContact } = require("../controllers/contactController");

const router = express.Router();

router.post("/contact", sendContactMessage);
router.post("/contact-page", saveContact);
router.get("/contact-page", getContact);

module.exports = router;
