import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    // Optional logged-in user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // Donor full name
    donorName: {
      type: String,
      required: true,
      trim: true,
    },

    // Donation amount
    amount: {
      type: Number,
      required: true,
      min: 1,
    },

    // Payment method
    method: {
      type: String,
      enum:  [

        "Telebirr",
    
        "CBE",
    
        "Cash",
    
        "Bank"
    
      ],
      required: true,
    },

    // Optional supporter message
    message: {
      type: String,
      default: "",
      trim: true,
    },

    // Donation verification status
    status: {
      type: String,
      enum: ["pending", "confirmed", "rejected"],
      default: "pending",
    },

    // Payment proof image/file
    proof: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Donation", donationSchema);