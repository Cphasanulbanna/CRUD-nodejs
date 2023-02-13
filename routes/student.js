const express = require("express");
var router = express();
const bodyparser = require("body-parser");

const create = require("../controller/student");
const view = require("../controller/student");


router.use(bodyparser.json());

router.post("/create", create.create);
router.get("/", view.view);

module.exports = router;