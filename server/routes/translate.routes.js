import express from "express";
import axios from "axios";

const router =
  express.Router();

router.post(
  "/",
  async (req, res) => {

    try {

      const {
        text,
        targetLang,
      } = req.body;

      const response =
        await axios.post(

          "https://api-free.deepl.com/v2/translate",

          {
            text: [text],
            target_lang:
              targetLang,
          },

          {
            headers: {

              Authorization:
                `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,

              "Content-Type":
                "application/json",

            },
          }

        );

      res.json({

        translatedText:
          response.data
            .translations[0]
            .text,

      });

    } catch (error) {

      console.error(error);

      res.status(500).json({

        message:
          "Translation failed",

      });

    }

  }
);

export default router;