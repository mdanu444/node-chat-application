const express = require("express");
const router = express.Router();
const inboxController = require("./../controller/inboxController");
const decorateHtmlResponse = require("./../middleware/common/decorateHtmlResponse");
router.get("/", decorateHtmlResponse("Inbox"), inboxController);

module.exports = router;
