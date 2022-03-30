export {};
const express = require("express");
const zonesController = require("../controllers/zones.controller");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", zonesController.get);
router.post("/", zonesController.post);

module.exports = router;
