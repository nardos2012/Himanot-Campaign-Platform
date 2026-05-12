import * as deepl from "deepl-node";

export const translateText = async (
  text,
  targetLang
) => {
  try {
    const apiKey =
      process.env.DEEPL_API_KEY;

    console.log("DEEPL KEY:", apiKey);

    if (!apiKey) {
      throw new Error(
        "DEEPL_API_KEY missing in .env"
      );
    }

    const translator =
      new deepl.Translator(apiKey);

    const result =
      await translator.translateText(
        text,
        null,
        targetLang
      );

    return result.text;
  } catch (error) {
    console.error(
      "Translation Error:",
      error
    );

    throw error;
  }
};