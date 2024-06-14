const express = require("express");
const router = express.Router();
const memberController = require("./controller/memberController");

// memberga dahldor
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);

module.exports = router;
