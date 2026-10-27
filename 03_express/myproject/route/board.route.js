
const express = require("express");

const boardController = require("../controller/board.controller");
const {validateBoard} = require("../middleware/validation.middleware");

const router = express.Router();

router.get("/", boardController.getBoard);
router.get("/:id", boardController.getBoardById);

router.post("/", validateBoard, boardController.createBoard);

router.put("/:id", validateBoard, boardController.updateBoard);

router.delete("/:id", boardController.deleteBoard);

module.exports = router;