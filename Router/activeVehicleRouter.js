const activeVehicleController = require("../Controller/activeVehiclesController")
const router = require("express").Router();

router.get("/activeVehicle", activeVehicleController.findActivevehicles)

module.exports = router
