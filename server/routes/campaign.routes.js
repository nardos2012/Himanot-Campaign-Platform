import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    partyName: "GOGOT PARTY",
    slogan: "Together for Change",
  });
});

export default router;
