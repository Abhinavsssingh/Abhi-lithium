// printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler
const today = new Date()
let printDate=function(){
       return today.getDate()
}
let printMonth = function(){
    return today.getMonth()
}
let getBatchInfo=function(){
    return "Lithium, W3D4, topic for today is Nodejs module system "
    
}
module.exports.mydate=printDate
module.exports.mymonth=printMonth
module.exports.batchinfo=getBatchInfo
