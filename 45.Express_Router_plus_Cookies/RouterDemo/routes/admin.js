const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    // http://localhost:3000/admin/deleteeverything?isAdmin=true
    next();
  }
  res.send("Sorry Not an Admin");
});

router.get("/topsecret", (req, res) => {
  res.send("This is top secret");
});

router.get("/deleteeverything", (req, res) => {
  res.send("Ok deleted it all!!");
});

module.exports = router;
