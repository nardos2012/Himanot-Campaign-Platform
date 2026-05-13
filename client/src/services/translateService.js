import axios from "axios";

const API =
  "http://${API_URL}/api/translate";

export const translateContent = async (
  text,
  targetLang
) => {
  try {
    const response = await axios.post(
      API,
      {
        text,
        targetLang,
      }
    );

    return response.data.translated;
  } catch (error) {
    console.error(
      "Translation failed:",
      error
    );

    return text;
  }
};