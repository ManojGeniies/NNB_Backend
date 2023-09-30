const vehicleController = require("../Controller/vehiclesController")
const router = require("express").Router()

router.post("/vehicleinfo", vehicleController)

module.exports = router