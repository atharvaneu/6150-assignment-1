const express = require("express");
const router = new express.Router();

// GET: /health
router.get("/health", async (req, res) => {
  try {
    res.status(200).send({ health: "OK" });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
