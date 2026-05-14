import { Resend }
  from "resend";

import Supporter
  from "../models/supporter.model.js";

const resend =
  new Resend(
    process.env.RESEND_API_KEY
  );

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
          (supporter) =>
            supporter.email
        );

      // SEND EMAIL
      const data =
        await resend.emails.send({

          from:
            "onboarding@resend.dev",

          to: emails,

          subject,

          html: `

            <div
              style="
                font-family:
                  Arial,
                  sans-serif;
                line-height:
                  1.6;
              "
            >

              <h2>
                GOGOT PARTY
              </h2>

              <p>
                ${message}
              </p>

            </div>

          `,

        });

      res.status(200).json({

        success: true,

        message:
          "Emails sent successfully",

        data,

      });

    } catch (error) {

      console.error(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };