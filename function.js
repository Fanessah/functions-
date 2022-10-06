// line 2 and line 4 do the same thing 
// function addTwo(a,b){

// const addTwo = (a,b)=> {
//     return a + b
// }

const addTwo = require('./external.js')

console.log(" none of this minus stuff we dot do negative!")
console.log(" thats right!")

const sum = addTwo(3,4)
console.log (sum)
// console.log (sum)
// const sum = addTwo(3,4)

const subtract = require('./minus.js')
const total = subtract(10,5)
console.log(total)



