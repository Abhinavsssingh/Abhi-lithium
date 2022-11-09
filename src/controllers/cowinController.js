let axios = require("axios")



let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getbydistric = async function (req,res){
    try{
        let id = req.query.id
        let date = req.query.date

        let option ={
            method:"get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`,
        }
        let result = await axios(option)
        res.status(200).send({data:result.data})

    }catch(error){res.status(500).send({msg:error.message})}
}

let londontemp = async function (req,res){
    try{
        let arr =[]
        const city=["bengaluru","mumbai", "delhi", "kolkata", "chennai", "london", "moscow"]
        for(i of city){

        let option ={
            method:"get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${i}&appid=de5f1f07707bb28458a393768edee120`
        }
        

        let result = await axios(option)
        arr.push({name:result.data.name,temp:result.data.main.temp})
    }
        arr.sort((a,b)=>a.temp-b.temp)
         
        res.status(200).send({data:arr})

    }catch(error){res.status(500).send({msg:error.message})}
}

let getmemes = async function (req, res) {
    try {
        // let memecontent = req.query
        
        // console.log(`body is : ${memecontent} `)
        
         let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${req.query.template_id}&text0=${req.query.text0}&text1=${req.query.text1}&username=${req.query.username}&password=${req.query.password}`
            // data: req.params
        }

        let result = await axios(options)
        // console.log(result)
        res.status(200).send({ msg:result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}






module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getbydistric = getbydistric
module.exports.londontemp = londontemp
module.exports.getmemes = getmemes