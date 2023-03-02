const fs = require('fs');
const [num1, num2] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let first = num2 % 10
let second = Math.floor((num2 % 100) / 10)
let third = Math.floor(num2 / 100)

console.log(num1 * first)
console.log(num1 * second)
console.log(num1 * third)
console.log(num1 * num2)