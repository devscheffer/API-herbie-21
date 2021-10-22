/** @format */

const express = require("express");
const router = express.Router();
const controller = require("./controller");
const check_auth = require("../../middleware/check_auth");


router.post("/", check_auth, controller.post);
router.get("/", check_auth, controller.get_all);
router.get("/:id", check_auth, controller.get_by_id);
router.patch("/:id", check_auth, controller.patch);
router.delete("/:id", check_auth, controller.delete);

module.exports = router;
