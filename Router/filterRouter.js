const router = require("express").Router()
const filterController = require("../Controller/filterController")

router.get('/filter', filterController.filterVehicles)

module.exports = router