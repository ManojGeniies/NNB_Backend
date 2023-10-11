const activeVehicleController = require("../Controller/activeVehiclesController")
const router = require("express").Router();

router.get("/active-vehicle", activeVehicleController.findActivevehicles)
router.post("/create/active-vehicle", activeVehicleController.createActiveVehicles)

module.exports = router
