const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const xxx =require('../util/helper')
const xxy = require('../validator/format')
const yyy=require('../loadesh/pekka')
//importing external package
// const underscore = require('underscore')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log(xyz.mywelcome())
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    console.log(xxx.mydate())
    console.log(xxx.mymonth())
    console.log(xxx.batchinfo())
    console.log(xxy.myv())
    console.log(yyy.myfun1())
    console.log(yyy.myfun2())
    console.log(yyy.myfun3())
    console.log(yyy.myfun4())


    
    
    //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});


module.exports = router;

