const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const jwt = require("jsonwebtoken");

const auth =async function (req,res,next){
try{
  try{
    let x=req.headers['x-auth-token']
  // console.log(x)
  if(!x){
    return res.status(400).send("header missing")
  }
  var decodedToken = jwt.verify(x, "functionup-Lithium-very-very-secret-key")
}catch(error){
  return res.status(401).send({msg:error.message})
}
  // if (!decodedToken){
  //   return res.send({ status: false, msg: "token is invalid" })
  // }

  let idd = req.params.userId

  if(idd!=decodedToken.userId){
      return res.status(403).send({status:false, msg:"unauthorized"})
    }
  next()
}
catch(error){
   return res.status(500).send({msg:error.message})
}
}


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.post("/UsserLogin", userController.UsserLogin)

router.get("/getdetaIl/:userId",auth, userController.getdetaIl)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

router.put("/updatedata/:userId",auth,userController.updatedata)

router.put("/deleted/:userId",auth,userController.deleted)

module.exports = router;