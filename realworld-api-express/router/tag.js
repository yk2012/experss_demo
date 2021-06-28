const express = require("express");
const tagCtrl = require("../controller/tag");

const router = express.Router();

// Get Tags
router.get("/tags", tagCtrl.getTags);

module.exports = router;
