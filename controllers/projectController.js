const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const { title, description, projectLink } = req.body;

    if (!title || !description || !projectLink) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const project = await Project.create({
      title,
      description,
      projectLink,
    });

    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.error("Create Project Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: 1 }); 

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error("Get Projects Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, projectLink } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Project ID is required",
      });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        ...(title && { title }),
        ...(description && { description }),
        ...(projectLink && { projectLink }),
      },
      {
        new: true, 
        runValidators: true,
      }
    );

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    console.error("Update Project Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Project ID is required",
      });
    }

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Delete Project Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

