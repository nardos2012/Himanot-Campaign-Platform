import Donation from "../models/donation.model.js";
import User from "../models/user.model.js";


export const getStats = async (req, res) => {
  try {
    const confirmed = await Donation.countDocuments({ status: "confirmed" });
    const pending = await Donation.countDocuments({ status: "pending" });
    const rejected = await Donation.countDocuments({ status: "rejected" });

    const totalAmount = await Donation.aggregate([
      { $match: { status: "confirmed" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    // ✅ SAFE FIX (NO VS CODE ERRORS)
    const totalRevenue =
      totalAmount && totalAmount.length > 0
        ? totalAmount[0].total
        : 0;

    const totalUsers = await User.countDocuments();
    const adminCount = await User.countDocuments({ role: "admin" });

    res.json({
      donations: {
        confirmed,
        pending,
        rejected,
        totalRevenue,
      },
      users: {
        totalUsers,
        admin: adminCount,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats" });
  }
};