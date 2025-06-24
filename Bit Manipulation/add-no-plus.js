// add numbers w/o + or - 

function addNoPlus(numA, numB) {
  while (numB !== 0) {
    let carryBox = numA & numB
    numA = numA ^ numB
    numB = carryBox << 1
  }
  return numA
}

console.log(addNoPlus(7, 5))
console.log(addNoPlus(100, 234))
