const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All SHELTERS");
});

router.post("/", (req, res) => {
  res.send("Creating Shelter");
});

router.get("/:id", (req, res) => {
  res.send("One SHELTER");
});

router.get("/:id/edit", (req, res) => {
  res.send("Editing One SHELTER");
});

module.exports = router;
