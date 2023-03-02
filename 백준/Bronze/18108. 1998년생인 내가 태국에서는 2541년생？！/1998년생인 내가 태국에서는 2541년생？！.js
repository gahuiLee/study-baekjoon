const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const y = parseInt(input) - 543;
console.log(y)