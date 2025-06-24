//  knight's tour problem

let boxSize = 8
let horseStepsX = [2, 1, -1, -2, -2, -1, 1, 2]
let horseStepsY = [1, 2, 2, 1, -1, -2, -2, -1]

function makeHorseBoard(bigNumber) {
  let table = []
  for (let line = 0; line < bigNumber; line++) {
    let row = []
    for (let space = 0; space < bigNumber; space++) {
      row.push(-1)
    }
    table.push(row)
  }
  return table
}

function isItSafe(horseBoard, r, c) {
  return r >= 0 && c >= 0 && r < boxSize && c < boxSize && horseBoard[r][c] === -1
}

function doHorseStuff(horseBoard, nowX, nowY, countNumber) {
  if (countNumber === boxSize * boxSize) {
    return true
  }

  for (let z = 0; z < 8; z++) {
    let moveX = nowX + horseStepsX[z]
    let moveY = nowY + horseStepsY[z]

    if (isItSafe(horseBoard, moveX, moveY)) {
      horseBoard[moveX][moveY] = countNumber
      if (doHorseStuff(horseBoard, moveX, moveY, countNumber + 1)) {
        return true
      } else {
        horseBoard[moveX][moveY] = -1
      }
    }
  }

  return false
}

function startHorseWalk() {
  let horseBoard = makeHorseBoard(boxSize)
  horseBoard[0][0] = 0

  if (doHorseStuff(horseBoard, 0, 0, 1)) {
    return horseBoard
  } else {
    return "no horse walk"
  }
}

console.log(startHorseWalk())
console.log("I love horses and chess and code and boards and numbers and loops and ifs")
