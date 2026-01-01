const express = require("express");
const { sendContactMessage,  saveContact, getContact, updateContact } = require("../controllers/contactController");

const router = express.Router();

router.post("/contact", sendContactMessage);
router.post("/contact-page", saveContact);
router.get("/contact-page", getContact);
router.patch("/contact-page", updateContact); 

module.exports = router;
