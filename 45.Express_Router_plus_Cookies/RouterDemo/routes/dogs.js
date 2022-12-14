const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Dogs");
});

router.get("/:id", (req, res) => {
  res.send("VIEWING one Dog");
});

router.get("/:id/edit", (req, res) => {
  res.send("Editing one dog");
});

module.exports = router;
