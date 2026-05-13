import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// // REGISTER USER
export const register =
  async (req, res) => {

    try {

      const {
        name,
        email,
        password,
      } = req.body;

      const existingUser =
        await User.findOne({
          email,
        });

      if (existingUser) {

        return res
          .status(400)
          .json({

            message:
              "User already exists",

          });

      }

      const user =
        await User.create({

          name,
          email,
          password,

          isAdmin: false,

        });

      res.status(201).json({

        message:
          "Registered successfully",

        user,

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }

  };


// LOGIN USER
export const login = async (req, res) => {

  try {

    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {

      return res.status(400).json({
        message: "User not found",
      });

    }

    const match = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!match) {

      return res.status(400).json({
        message: "Invalid credentials",
      });

    }

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// ADMIN LOGIN
export const loginAdmin = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {

      return res.status(401).json({
        message: "Invalid credentials",
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(401).json({
        message: "Invalid credentials",
      });

    }

    if (!user.isAdmin) {

      return res.status(403).json({
        message: "Access denied",
      });

    }

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      token,
      user,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};