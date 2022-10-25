const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const bookmodel = require("../models/bookmodel")
const UserController= require("../controllers/userController")
const bookController= require("../controllers/bookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.post("/createbook", bookController.createbook  )

router.get("/getUsersData", UserController.getUsersData)
router.get("/getbookData", bookController.getbookData)

module.exports = router;