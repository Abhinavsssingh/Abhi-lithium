const express = require('express');
const router = express.Router();
const cryptoModel = require("../models/cryptomodel")

let axios = require("axios");



let getCrypto = async function (req, res) {

    try{

    let options = {
        method: 'get',
        url: 'https://api.coincap.io/v2/assets'
    }
    let result = await axios(options)
    
    let data = result.data.data

    let updates = data.map(element => {
        return {
            updateOne: {
            filter: { name: element.name },
            update: { $set: { name : element.name , symbol : element.symbol , marketCapUsd : element.marketCapUsd , priceUsd : element.priceUsd } },
            upsert: true
        }
        }
    })

    await cryptoModel.bulkWrite(updates)

    let sortedCoins = data.sort((a, b) => b['changePercent24Hr'] - a['changePercent24Hr'])

    res.status(201).send({ status : true , message : sortedCoins })

} catch (err) {
        res.status(500).send({ message : err.message })
    }
}







router.get("/test-me",getCrypto)








module.exports = router;