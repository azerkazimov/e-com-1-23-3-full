const express = require("express");

const router = express.Router();

const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const authMiddleware = require("../middleware/auth.middleware");

router.use("/auth", authRouter);
router.use("/users", authMiddleware, userRouter);

module.exports = router;
