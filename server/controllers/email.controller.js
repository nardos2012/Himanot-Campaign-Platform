import nodemailer from "nodemailer";

import Supporter from "../models/supporter.model.js";

// SEND EMAIL
export const sendEmail =
  async (req, res) => {

    try {

      const {
        subject,
        message,
      } = req.body;

      // GET SUPPORTERS
      const supporters =
        await Supporter.find();

      const emails =
        supporters.map(
          (s) => s.email
        );

      // TRANSPORTER
      const transporter =
        nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
          auth: {
            user:
              process.env.EMAIL_USER,
            pass:
              process.env.EMAIL_PASS,
          },
        });

      // SEND MAIL
      await transporter.sendMail({

        from:
          process.env.EMAIL_USER,

        to:
          process.env.EMAIL_USER,

        bcc: emails,

        subject,

        text: message,

      });

      res.status(200).json({

        success: true,

        message:
          "Emails sent successfully",

      });

    } catch (error) {

      console.error(error);

      res.status(500).json({

        success: false,

        message: error.message,

      });

    }
  };