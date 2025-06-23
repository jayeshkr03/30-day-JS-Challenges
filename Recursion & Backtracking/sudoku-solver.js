function solveSudoku(grid) {
  function isOk(row, col, num) {
    let ch = num.toString();
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === ch || grid[i][col] === ch) return false;
      let boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      let boxCol = 3 * Math.floor(col / 3) + i % 3;
      if (grid[boxRow][boxCol] === ch) return false;
    }
    return true;
  }

  function go() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === ".") {
          for (let num = 1; num <= 9; num++) {
            if (isOk(row, col, num)) {
              grid[row][col] = num.toString();
              if (go()) return true;
              grid[row][col] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  go();
  return grid;
}

function printBoard(board) {
  for (let row = 0; row < 9; row++) {
    console.log(board[row].join(" "));
  }
}

let puzzle1 = [
  "53..7....",
  "6..195...",
  ".98....6.",
  "8...6...3",
  "4..8.3..1",
  "7...2...6",
  ".6....28.",
  "...419..5",
  "....8..79"
].map(row => row.split(""));

let puzzle2 = [
  "8........",
  "..36.....",
  ".7..9.2..",
  ".5..7....",
  "....457..",
  "...1..3..",
  "..1....68",
  "..85...1.",
  ".9....4.."
].map(row => row.split(""));

console.log("Solved Sudoku #1:");
solveSudoku(puzzle1);
printBoard(puzzle1);

console.log("\nSolved Sudoku #2:");
solveSudoku(puzzle2);
printBoard(puzzle2);
