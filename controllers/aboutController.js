const About = require("../models/About");
const { calculateExperience, applyExperienceToText } = require("../utils/experience");


exports.saveAbout = async (req, res) => {
  try {
    const data = req.body;

    let about = await About.findOne();

    if (about) {
      about = await About.findByIdAndUpdate(
        about._id,
        data,
        { new: true, runValidators: true }
      );
    } else {
      about = await About.create(data);
    }

    const experience = calculateExperience(about.experienceStartDate);

    const descriptionWithExperience = applyExperienceToText(
      about.description,
      experience.label
    );

    return res.status(200).json({
      success: true,
      message: "About page saved successfully",
      data: {
        ...about.toObject(),
        description: descriptionWithExperience,
        experience,
      },
    });
  } catch (error) {
    console.error("Save About Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne();

    if (!about) {
      return res.status(404).json({
        success: false,
        message: "About page content not found",
      });
    }

    const experience = calculateExperience(about.experienceStartDate);

    const descriptionWithExperience = applyExperienceToText(
      about.description,
      experience.label
    );

    return res.status(200).json({
      success: true,
      data: {
        ...about.toObject(),
        description: descriptionWithExperience,
        experience,
      },
    });
  } catch (error) {
    console.error("Get About Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.updateAbout = async (req, res) => {
  try {
    const updates = req.body;

    const about = await About.findOne();

    if (!about) {
      return res.status(404).json({
        success: false,
        message: "About page content not found",
      });
    }

    const updatedAbout = await About.findByIdAndUpdate(
      about._id,
      updates,
      { new: true, runValidators: true }
    );

    const experience = calculateExperience(
      updatedAbout.experienceStartDate
    );

    const descriptionWithExperience = applyExperienceToText(
      updatedAbout.description,
      experience.label
    );

    return res.status(200).json({
      success: true,
      message: "About page updated successfully",
      data: {
        ...updatedAbout.toObject(),
        description: descriptionWithExperience,
        experience,
      },
    });
  } catch (error) {
    console.error("Update About Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

