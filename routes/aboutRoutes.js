const express = require("express");
const { saveAbout, getAbout, updateAbout } = require("../controllers/aboutController");

const router = express.Router();

router.post("/about", saveAbout);
router.get("/about", getAbout);
router.patch("/about", updateAbout);

module.exports = router;
