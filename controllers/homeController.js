const Home = require("../models/Home");

exports.saveHome = async (req, res) => {
  try {
    const data = req.body;

    let home = await Home.findOne();

    if (home) {
      home = await Home.findByIdAndUpdate(
        home._id,
        data,
        { new: true, runValidators: true }
      );
    } else {
      home = await Home.create(data);
    }

    return res.status(200).json({
      success: true,
      message: "Home page saved successfully",
      data: home,
    });
  } catch (error) {
    console.error("Save Home Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.getHome = async (req, res) => {
  try {
    const home = await Home.findOne();

    if (!home) {
      return res.status(404).json({
        success: false,
        message: "Home page content not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: home,
    });
  } catch (error) {
    console.error("Get Home Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.updateHome = async (req, res) => {
  try {
    const updates = req.body;

    const home = await Home.findOne();

    if (!home) {
      return res.status(404).json({
        success: false,
        message: "Home page content not found",
      });
    }

    const updatedHome = await Home.findByIdAndUpdate(
      home._id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Home page updated successfully",
      data: updatedHome,
    });
  } catch (error) {
    console.error("Update Home Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
