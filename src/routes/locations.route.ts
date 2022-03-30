export {};
const express = require("express");
const locationsController = require("../controllers/locations.controller");
const router = express.Router();
const validate = require("../middlewares/validate");
const validator = require("../validations/location.validation");
// const auth = require("../middlewares/auth");

router.get("/", locationsController.get);
router.post("/", locationsController.post);
router.put(
  "/lease",
  validate(validator.updateLeaseRange),
  locationsController.updateLeaseRange
);

module.exports = router;
