const router = require("express").Router()
const driverInfoController = require("../Controller/driverinfoController")

router.put("/driverinfo/:id", driverInfoController.insertDriverInfo)
router.get("/drivers", driverInfoController.allDrivers)

module.exports = router