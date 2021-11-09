const express = require("express");
const router = express.Router();
const loginController = require("../controller/LoginController");
const homeController = require("../controller/HomeController");
router.get("/", loginController.loginPage);
router.get("/home", homeController.getHomePage);
router.post("/addUser", homeController.addUserInDb);
module.exports = router;
