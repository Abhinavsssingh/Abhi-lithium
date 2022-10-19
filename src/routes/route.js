const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random", function (req, res) {
    res.send("hi there")
})


router.get("/test-api", function (req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log(req.body)

    res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body.element
    arr.push(ele)
    res.send({ msg: arr, status: true })
})

let players =
    [
        {
            name: "manish",
            dob: "1/1/1995",
            gender: "male",
            city: "jalandhar",
            sports: [
                "swimming"
            ]
        },
        {
            name: "gopal",
            dob: "1/09/1995",
            gender: "male",
            city: "delhi",
            sports: [
                "soccer"
            ]
        },
        {
            name: "lokesh",
            dob: "1/1/1990",
            gender: "male",
            city: "mumbai",
            sports: [
                "soccer"
            ]
        },
    ]



router.post("/players1",function (req, res) {
    console.log(players)
    let newplayer = req.body.p1
    console.log(newplayer)
    for (i of players) {
        if (i.name == newplayer.name) {
            return res.send("name already exists")
            
        }
    }

    players.push(newplayer)
    // console.log(result)
    res.send({ msg: players, status: true })




})

router.get("/missing2",function(req,res){
    const b=[1,2,3,4,5,7,8,9]
    const h=b.reduce((hn,a,b)=>hn=Math.max(a,b),0)
    console.log(h)
    const sum=b.reduce((acc,x)=>acc+x,0)
    console.log(sum)
    miN=(((h)*((h+1)))/2)-sum
    console.log(miN)
    res.send("console me dekho")
})

router.get("/missing3",function(req,res){
    const arr=[32,33,34,35,37,38,39]
function myfun(a){
    for(i=0;i<(a.length);i++){
        if(a[i]+1==a[i+1]){
            continue
        }else{
            return(a[i]+1)
        }
    }
}

console.log(myfun(arr))
res.send("see in console")
})



module.exports = router;