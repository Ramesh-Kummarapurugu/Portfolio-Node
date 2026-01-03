const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
    {
        sectionTitle: {
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

        roleTitle: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        experienceStartDate: {
            type: Date,
            required: true,
        },

        experienceTitle: {
            type: String,
            default: "Years Relevant Experience",
        },

        skills: [
            {
                name: String,
                iconClass: String,
            },
        ],

        toolsTitle: {
            type: String,
            required: true,
        },

        tools: [
            {
                label: String,
                iconClass: String,
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("About", aboutSchema);
