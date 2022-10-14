const url = "https://www.google.com"

let printSomething = function() {
    console.log("Request details are - a, b, c")
    return "done"
}

let welcome = function(){
    return "Welcome to my application. I am Abhinav Singh and a part of FunctionUp Lithium cohort."
}

let abc = 2022
module.exports.myUrl = url
module.exports.myFunction = printSomething
module.exports.mywelcome=welcome
