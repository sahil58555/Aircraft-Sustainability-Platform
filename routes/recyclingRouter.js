const express = require("express");

const router = express.Router();

router
  .route("/status")
  .get((req, res) => res.status(200).json({ message: " get recycling" }));

router
  .route("/status/:id")
  .patch((req, res) => res.status(200).json({ message: "post recycling " + req.params.id }));

module.exports = router;
