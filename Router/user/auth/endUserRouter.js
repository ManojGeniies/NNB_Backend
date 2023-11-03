const endUserController = require("../../../Controller/user/auth/endUserController");
const router = require('express').Router();

router.post("/enduser/register", endUserController.endUserRegister);
router.get("/enduser/login", endUserController.endUserLogin);

module.exports = router;