const express = require("express");
const Controller = require("../controllers/controller");
const myMiddleware = require("../middleware/middleware")

const router = express.Router();

router.use("/api", Controller.helloWorld);
router.use('/guys',myMiddleware.myMiddleware, Controller.helloGuys)

module.exports = router;
