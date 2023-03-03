const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let h = parseInt(input[0])
let m = parseInt(input[1])

function alarm(h, m) {
  let hour = h;
  let min = m - 45;

  if(min < 0) {
    min += 60
    hour--
    if(hour === -1) {
      hour = 23
    }
  }

  console.log(`${hour} ${min}`)
}
alarm(h, m)