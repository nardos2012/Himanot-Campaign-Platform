import Donation from "../models/donation.model.js";

// CREATE DONATION
export const createDonation = async (req, res) => {

  try {

    const {
      donorName,
      amount,
      method,
      message,
    } = req.body;

    const donation = await Donation.create({
      donorName,
      amount,
      method,
      message,
    });

    res.status(201).json({
      success: true,
      donation,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// GET ALL DONATIONS
export const getDonations = async (req, res) => {

  try {

    const donations = await Donation.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      donations,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// UPDATE DONATION STATUS
export const updateDonationStatus = async (req, res) => {

  try {

    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    if (!donation) {

      return res.status(404).json({
        success: false,
        message: "Donation not found",
      });

    }

    res.status(200).json({
      success: true,
      donation,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const deleteDonation = async (req, res) => {

  try {

    const donation = await Donation.findByIdAndDelete(
      req.params.id
    );

    if (!donation) {

      return res.status(404).json({
        success: false,
        message: "Donation not found",
      });

    }

    res.status(200).json({
      success: true,
      message: "Donation deleted successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};