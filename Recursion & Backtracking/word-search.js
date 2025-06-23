function searchWord(grid, word) {
  let rows = grid.length;
  let cols = grid[0].length;

  function check(row, col, index) {
    if (index === word.length) return true;
    if (row < 0 || col < 0 || row >= rows || col >= cols) return false;
    if (grid[row][col] !== word[index]) return false;

    let temp = grid[row][col];
    grid[row][col] = "#";

    let found = check(row + 1, col, index + 1) || check(row - 1, col, index + 1) || check(row, col + 1, index + 1) || check(row, col - 1, index + 1);

    grid[row][col] = temp;
    return found;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (check(i, j, 0)) return true;
    }
  }

  return false;
}

let board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

console.log(searchWord(board, "ABCCED")); 
console.log(searchWord(board, "SEE"));    
console.log(searchWord(board, "ABCB"));   

