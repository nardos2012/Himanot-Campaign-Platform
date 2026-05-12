import jwt from "jsonwebtoken";

import User
  from "../models/user.model.js";

export const protect =
  async (
    req,
    res,
    next
  ) => {

    try {

      const authHeader =
        req.headers.authorization;

      if (
        !authHeader ||
        !authHeader.startsWith(
          "Bearer "
        )
      ) {

        return res.status(401)
          .json({

            message:
              "Not authorized",

          });

      }

      const token =
        authHeader.split(
          " "
        )[1];

      if (!token) {

        return res.status(401)
          .json({

            message:
              "Invalid token",

          });

      }

      const decoded =
        jwt.verify(

          token,

          process.env.JWT_SECRET

        );

      req.user =
        await User.findById(
          decoded.id
        ).select(
          "-password"
        );

      next();

    } catch (error) {

      console.error(error);

      res.status(401).json({

        message:
          "Token failed",

      });

    }

  };
  export const isAdmin =
  (
    req,
    res,
    next
  ) => {

    if (
      req.user &&
      req.user.isAdmin
    ) {

      next();

    } else {

      res.status(403).json({

        message:
          "Admin only",

      });

    }

  };