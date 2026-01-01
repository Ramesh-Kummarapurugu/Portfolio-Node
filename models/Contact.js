const mongoose = require("mongoose");

const contactPageSchema = new mongoose.Schema(
  {
    heroTitle: {
      type: String,
      required: true,
    },
    heroSubtitle: {
      type: String,
      required: true,
    },

    collaborationText: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },

    availabilityText: {
      type: String,
      required: true,
    },
    expertiseText: {
      type: String,
      required: true,
    },

    socialLinks: {
      github: String,
      linkedin: String,
      instagram: String,
    },

    connectTitle: {
      type: String,
      required: true,
    },
    aboutIntro: {
      type: String, 
      required: true,
    },
    aboutName: {
      type: String,
      required: true,
    },
    aboutDescription: {
      type: String, 
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactPageSchema);
