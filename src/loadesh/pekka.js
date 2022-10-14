// Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
// - Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays
// - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
// - Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console
// - Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
const { fromPairs } = require("lodash")
const lodash=require("lodash")
const fun1=function(){
const month=["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"]
return lodash.chunk(month,4)
}
// console.log(fun1())

const fun2=function(){
  const oddd=[1,3,5,7,9,11,13,15,17,19]
  return lodash.tail(oddd)
}
const fun3=function(){
    const o=[1,1,2,2,3]
    return lodash.union(o)
  }
//   console.log(fun3())

const fun4=function(){
    const movie=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    return fromPairs(movie)
}
// console.log(fun4())

module.exports.myfun1=fun1
module.exports.myfun2=fun2
module.exports.myfun3=fun3
module.exports.myfun4=fun4

