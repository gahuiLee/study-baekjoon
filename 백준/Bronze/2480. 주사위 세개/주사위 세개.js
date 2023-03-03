const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const num1 = parseInt(input[0])
const num2 = parseInt(input[1])
const num3 = parseInt(input[2])

function money(a, b, c) {
  let result
  if (a == b && a == c && b == c) {
    result = 10000 + a * 1000
  } else if (a == b || a == c || b == c) {
    let common = ((a == b) || (a == c)) ? a : ((b == c)) ? b : c 
    result = 1000 + common * 100
  } else {
    let max = ((a > b) && (a > c)) ? a : ((b > a) && (b > c)) ? b : c
    result = max * 100
  }
  return result
}

console.log(`${money(num1, num2, num3)}`)
