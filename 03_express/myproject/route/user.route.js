const express = require("express");
const useerController = require("../controller/user.controller");
const {validateUser} = require("../middleware/validation.middleware");
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");

const router = express.Router();

router.get("/",authMiddleware,adminMiddleware, useerController.getUsers);
router.get("/me", authMiddleware, useerController.getMe);
router.get("/:id", useerController.getUserById);

router.post("/", validateUser, useerController.createUser);

router.put("/:id", validateUser, useerController.updateUser);

router.delete("/:id", useerController.deleteUser);

module.exports = router;