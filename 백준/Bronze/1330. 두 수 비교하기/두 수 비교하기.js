const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [num1, num2] = [parseInt(input[0]), parseInt(input[1])]

if (num1 > num2) {
  console.log('>')
} else if (num1 < num2) {
  console.log('<')
} else {
  console.log('==')
}