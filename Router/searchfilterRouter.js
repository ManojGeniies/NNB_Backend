const searchFilter = require("../Controller/searchfilterController");
const router = require("express").Router();

router.post("/search", searchFilter.search);

module.exports = router;
