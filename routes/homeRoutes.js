const express = require("express");
const { saveHome, getHome, updateHome } = require("../controllers/homeController");
const upload = require("../middleware/upload");


const router = express.Router();

router.post("/home", upload.single("profileImage"), saveHome);    
router.get("/home", getHome);       
router.patch("/home", upload.single("profileImage"), updateHome); 

module.exports = router;
