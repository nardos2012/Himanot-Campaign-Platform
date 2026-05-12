const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema(
  {
    candidateName: String,
    slogan: String,
    vision: String,
    plan: String,
    promises: String,

    candidatePhoto: String,
    partyLogo: String,
    eventImages: [String],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Campaign", CampaignSchema);
