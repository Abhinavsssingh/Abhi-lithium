const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookcontroller")


router.post("/createmybook", bookController.createmybook)
router.post("/createauthor", bookController.createauthor)
router.get("/getbbychetan", bookController.getbbychetan)
router.get("/TwoStUpdate", bookController.TwoStUpdate)
router.get("/between", bookController.between)



module.exports = router;