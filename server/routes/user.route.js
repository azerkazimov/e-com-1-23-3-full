const express = require("express");
const router = express.Router();

const {
  getUserHandler,
  patchUserHandler,
  deleteUserHandler,
} = require("../controllers/user.controller");
const upload = require("../config/multer");

router
  .route("/me")
  .get(getUserHandler)
  .patch(upload.single("avatar"), patchUserHandler)
  .delete(deleteUserHandler);

module.exports = router;
