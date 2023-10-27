const vehicleController = require("../Controller/vehiclesController")
const router = require("express").Router()

router.post("/vehicleinfo", vehicleController.insertVechileinfo)
router.get("/vehicles", vehicleController.allVehicles)

module.exports = router