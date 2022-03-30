export {};
const express = require("express");
const image3dController = require("../controllers/image3d.controller");
const router = express.Router();
const validate = require("../middlewares/validate");
const validator = require("../validations/image3d.validation");
const auth = require("../middlewares/auth");

router.get("/", image3dController.get);
router.post(
  "/",
  [validate(validator.postNewRoom), auth()],
  image3dController.post
);

module.exports = router;
