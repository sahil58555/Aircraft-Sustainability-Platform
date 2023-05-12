const express = require("express");

const router = express.Router();

router
  .route("/aircraft")
  .get((req, res) => res.status(200).json({ message: " get aircraft" }))
  .post((req, res) => res.status(200).json({ message: "post aircraft" }));

router
  .route("/buyAircraft")
  .post((req, res) => res.status(200).json({ message: "post buyaircraft" }));

module.exports = router;
