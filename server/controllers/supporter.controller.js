import Supporter from "../models/supporter.model.js";

// REGISTER SUPPORTER
export const createSupporter =
  async (req, res) => {

    try {

      const supporter =
        await Supporter.create(
          req.body
        );

      res.status(201).json({
        success: true,
        supporter,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  };

// GET SUPPORTERS
export const getSupporters =
  async (req, res) => {

    try {

      const supporters =
        await Supporter.find()
          .sort({
            createdAt: -1,
          });

      res.status(200).json({
        success: true,
        supporters,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  };

// DELETE SUPPORTER
export const deleteSupporter =
  async (req, res) => {

    try {

      await Supporter.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Supporter deleted",
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  };