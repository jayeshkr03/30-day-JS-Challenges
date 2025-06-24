//  find unique number (x2 duplicates)

function lonelyNumber(myFunnyList) {
  let soloGuy = 0
  for (let i = 0; i < myFunnyList.length; i++) {
    soloGuy = soloGuy ^ myFunnyList[i]
  }
  return soloGuy
}

console.log(lonelyNumber([5, 3, 5, 7, 3]))
console.log(lonelyNumber([99, 88, 88, 77, 77]))
