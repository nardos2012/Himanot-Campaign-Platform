import User from "../models/user.model.js";
import Donation from "../models/donation.model.js";

export const getUserStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const donations = await Donation.find();

    const totalDonations = donations.reduce(
      (sum, d) => sum + d.amount,
      0
    );

    res.json({ totalUsers, totalDonations });
  } catch (error) {
    res.status(500).json({ message: "Stats error" });
  }
};
// user.controller.js
export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

export const updateUserRole = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role: req.body.role },
    { new: true }
  );

  res.json(user);
};



// export const getUsers = async (req, res) => {
//   const users = await User.find().select("-password");
//   res.json(users);
// };