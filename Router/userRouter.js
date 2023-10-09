const router = require("express").Router()
const userController = require("../Controller/userController")

router.post("/password", userController.createUserPassword)
router.post("/driver/login", userController.UserLogin)
router.post("/driver/logout/:id", userController.userLogout)

module.exports = router