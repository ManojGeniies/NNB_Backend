const router = require("express").Router()
const driverInfoController = require("../Controller/driverinfoController")

router.put("/driverinfo/:id", driverInfoController.insertDriverInfo)

module.exports = router