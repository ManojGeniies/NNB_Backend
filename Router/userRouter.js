const router = require("express").Router()
const userController = require("../Controller/userController")

router.post("/password", userController.createUserPassword)
router.post("/driver/login", userController.UserLogin)

module.exports = router