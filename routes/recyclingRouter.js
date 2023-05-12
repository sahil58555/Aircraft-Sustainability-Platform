const express = require("express");
const recyclingController = require('./../Controllers/recyclingController')

const router = express.Router();

router
  .route("/status")
  .get(recyclingController.getAircraftsStatus)
  .patch(recyclingController.updateStatusOfAircraft)

module.exports = router;
