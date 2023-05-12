const express = require("express");
const adminRouter = require("./../Controllers/adminController");

const router = express.Router();

router
  .route("/user")
  .get(adminRouter.getAllUser)
  .post(adminRouter.addUser)
  .patch(adminRouter.updateUser)
  .delete(adminRouter.deleteUser);

module.exports = router;
