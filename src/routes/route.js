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
router.get("/bookList", bookController.bookList)
router.get("/getXINRBooks", bookController.getXINRBooks)
router.get("/getRandomBooks", bookController.getRandomBooks)


router.post("/getBooksInYear", bookController.getBooksInYear)
router.post("/getParticularBooksr", bookController.getParticularBooksr)

module.exports = router;