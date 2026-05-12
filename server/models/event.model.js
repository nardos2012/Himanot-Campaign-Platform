import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      required: true,
    },

    eventDate: {
      type: Date,
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Event",
  eventSchema
);