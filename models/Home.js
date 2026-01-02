const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
    {
        greeting: {
            type: String,
            required: true,
        },
        introText: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },

        primaryRole: {
            type: String,
            required: true,
        },
        secondaryRole: {
            type: String,
            required: true,
        },

        bio: {
            type: String,
            required: true,
        },

        resumeLink: {
            type: String,
            required: true,
        },

        profileImage: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Home", homeSchema);
