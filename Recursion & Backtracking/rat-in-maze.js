// Rat in maze

function findRatWays(mazeBox) {
  var size = mazeBox.length;
  var allRatWays = [];

  function moveRat(ratX, ratY, pathString) {
    if (ratX < 0 || ratY < 0 || ratX >= size || ratY >= size || mazeBox[ratX][ratY] === 0) {
      return;
    }

    if (ratX === size - 1 && ratY === size - 1) {
      allRatWays.push(pathString);
      return;
    }

    mazeBox[ratX][ratY] = 0;

    moveRat(ratX + 1, ratY, pathString + "D");

    moveRat(ratX, ratY + 1, pathString + "R");

    mazeBox[ratX][ratY] = 1;
  }

  moveRat(0, 0, "");
  return allRatWays;
}

var myMaze = [
  [1, 0, 0],
  [1, 1, 0],
  [0, 1, 1]
];

var ratPaths = findRatWays(myMaze);
console.log(ratPaths);
