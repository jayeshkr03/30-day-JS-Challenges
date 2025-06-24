// palindrome partition 

function checkSameBothWays(wordy) {
  let front = 0
  let back = wordy.length - 1
  while (front < back) {
    if (wordy[front] !== wordy[back]) {
      return false
    }
    front++
    back--
  }
  return true
}

function doCuttingFunny(wordyWord, place, basket, answerAll) {
  if (place === wordyWord.length) {
    answerAll.push([...basket])
    return
  }

  for (let slicer = place + 1; slicer <= wordyWord.length; slicer++) {
    let smallPart = wordyWord.slice(place, slicer)
    if (checkSameBothWays(smallPart)) {
      basket.push(smallPart)
      doCuttingFunny(wordyWord, slicer, basket, answerAll)
      basket.pop()
    }
  }
}

function getAllCuttings(wordyWord) {
  let answerAll = []
  doCuttingFunny(wordyWord, 0, [], answerAll)
  return answerAll
}

console.log(getAllCuttings("noonmadam"))
console.log(getAllCuttings("abcba"))
