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
printDate()