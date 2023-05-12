const express = require("express");

const router = express.Router();

router
  .route("/recycle")
  .get((req, res) => res.status(200).json({ message: " get recycle" }))
  .post((req, res) => res.status(200).json({ message: "post recycle" }));

module.exports = router;
