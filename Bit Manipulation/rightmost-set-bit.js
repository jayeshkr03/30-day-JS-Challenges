// find rightmost set bit

function rightBitFinder(numby) {
  if (numby === 0) {
    return 0
  }
  let answer = numby & (-numby)
  return answer
}

console.log(rightBitFinder(10))
console.log(rightBitFinder(36))
