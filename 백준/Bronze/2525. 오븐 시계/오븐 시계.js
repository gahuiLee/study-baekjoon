const fs = require('fs');
const [input, n] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ")

let hour = parseInt(inputArr[0])
let min = parseInt(inputArr[1])
let work = parseInt(n)

function endTimer(h, m, w) {
  let endHour = Math.floor((h * 60 + m + w) / 60)
  let endMin = (h * 60 + m + w) % 60

  if (endHour >= 24) {
    endHour -= 24
  }
  console.log(`${endHour} ${endMin}`)
}

endTimer(hour, min, work)