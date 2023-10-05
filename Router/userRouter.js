const router = require("express").Router()
const userController = require("../controller/userController")

router.post("/password", userController.createUserPassword)
router.get("/login", userController.UserLogin)

module.exports = router