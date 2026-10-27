const express = require("express");

const authController = require("../controller/auth.controller");
const { validateRegister, validateLogin } = require("../middleware/validation.middleware");

const router = express.Router();

router.post("/register", validateRegister, authController.register);
router.post("/login", validateLogin, authController.login);

module.exports = router;