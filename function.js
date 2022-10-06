// line 2 and line 4 do the same thing 
// function addTwo(a,b){

// const addTwo = (a,b)=> {
//     return a + b
// }

const addTwo = require('./external.js')

console.log(" none of this minus stuff we dot do negative!")

const sum = addTwo(3,4)
console.log (sum)