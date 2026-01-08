const express = require("express");
const router = express.Router();
const upload = require("../config/upload");
const { createItem, getItems } = require("../controllers/itemController");

router.post("/", upload.single("image"), createItem);
router.get("/", getItems);

module.exports = router;
