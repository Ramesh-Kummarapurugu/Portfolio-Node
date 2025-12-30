const express = require("express");
const { createProject, getProjects, updateProject, deleteProject } = require("../controllers/projectController");

const router = express.Router();

router.post("/project/create", createProject);
router.get("/projects", getProjects);
router.patch("/project/:id", updateProject);
router.delete("/project/:id", deleteProject);

module.exports = router;
