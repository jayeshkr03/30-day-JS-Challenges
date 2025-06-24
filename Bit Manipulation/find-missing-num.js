// find missing number

function findLostNumber(sillyArray) {
  let bigXor = 0
  let arrayXor = 0

  for (let i = 0; i < sillyArray.length; i++) {
    arrayXor = arrayXor ^ sillyArray[i]
  }

  for (let j = 0; j <= sillyArray.length; j++) {
    bigXor = bigXor ^ j
  }

  return bigXor ^ arrayXor
}

console.log(findLostNumber([0, 1, 2, 4, 5]))
console.log(findLostNumber([3, 0, 1]))
