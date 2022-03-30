export {};
const express = require("express");
const roomController = require("../controllers/room.controller");
const router = express.Router();
const validate = require("../middlewares/validate");
const validator = require("../validations/room.validation");
const auth = require("../middlewares/auth");
// const auth = require("../middlewares/auth");

router.get("/", roomController.get);
router.post(
  "/",
  [validate(validator.postNewRoom), auth()],
  roomController.post
);

module.exports = router;
