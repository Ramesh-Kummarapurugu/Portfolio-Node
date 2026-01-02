const express = require("express");
const { saveHome, getHome, updateHome } = require("../controllers/homeController");

const router = express.Router();

router.post("/home", saveHome);    
router.get("/home", getHome);       
router.patch("/home", updateHome); 

module.exports = router;
