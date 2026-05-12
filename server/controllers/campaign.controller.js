const Campaign = require("../models/campaign.model");

exports.createCampaign = async (req, res) => {
  const data = {
    ...req.body,
    candidatePhoto: req.files.candidatePhoto?.[0]?.path,
    partyLogo: req.files.partyLogo?.[0]?.path,
    eventImages: req.files.eventImages?.map((f) => f.path),
  };

  const campaign = await Campaign.create(data);
  res.json(campaign);
};

exports.getCampaign = async (req, res) => {
  const campaign = await Campaign.findOne();
  res.json(campaign);
};
