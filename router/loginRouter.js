const express = require("express");
const loginRouter = express.Router();
const loginController = require("./../controller/loginController");
const decorateHtmlResponse = require("./../middleware/common/decorateHtmlResponse");
loginRouter.get("/", decorateHtmlResponse("Login"), loginController);

module.exports = loginRouter;
