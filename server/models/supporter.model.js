import mongoose from "mongoose";

const supporterSchema =
  new mongoose.Schema(
    {

      name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
      },

      phone: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },

      skills: {
        type: String,
        default: "",
      },

      message: {
        type: String,
        default: "",
      },

    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Supporter",
  supporterSchema
);