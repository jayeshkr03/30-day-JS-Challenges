// check power of 2 

function isItTwoPower(numbie) {
  if (numbie <= 0) {
    return false
  }
  if ((numbie & (numbie - 1)) === 0) {
    return true
  } else {
    return false
  }
}

console.log(isItTwoPower(64))
console.log(isItTwoPower(123))
