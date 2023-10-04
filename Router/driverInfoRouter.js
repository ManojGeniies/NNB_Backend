const router = require("express").Router()
const driverInfoController = require("../Controller/driverinfoController")

router.post("/driverinfo", driverInfoController.insertDriverInfo)

module.exports = router