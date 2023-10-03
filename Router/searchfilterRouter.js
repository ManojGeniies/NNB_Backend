const searchFilter = require("../Controller/searchfilterController");
const router = require("express").Router();

router.get("/filter", searchFilter.search)

module.exports = router