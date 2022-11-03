const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const jwt = require("jsonwebtoken");

const auth =async function (req,res,next){
    let x=req.headers['x-auth-token']
  // console.log(x)
  if(!x){
    return res.send("header missing")
  }
  let decodedToken = jwt.verify(x, "functionup-Lithium-very-very-secret-key")
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" })
  next()
}

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.post("/UsserLogin", userController.UsserLogin)

router.get("/getdetaIl/:userId",auth, userController.getdetaIl)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

router.put("/updatedata/:userId", userController.updatedata)

router.put("/deleted/:userId", userController.deleted)

module.exports = router;