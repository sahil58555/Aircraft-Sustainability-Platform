const express = require("express");

const router = express.Router();

router
  .route("/user")
  .get((req, res) => {
    res.status(200).json({ message: "getUsers" })
  })
  .post((req, res) => res.status(200).json({ message: "addUser" }))
  .patch((req, res) =>
    res.status(200).json({ message: "updateUserRole" })
  )
  .delete((req, res) =>
    res.status(200).json({ message: "deleteUser" })
  );

  module.exports = router;
