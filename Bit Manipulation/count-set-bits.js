// count set bits 

function howManyOnesFunny(numberInput) {
  let answerCount = 0
  while (numberInput > 0) {
    if (numberInput % 2 === 1) {
      answerCount = answerCount + 1
    }
    numberInput = Math.floor(numberInput / 2)
  }
  return answerCount
}

console.log(howManyOnesFunny(13))
console.log(howManyOnesFunny(123456))
