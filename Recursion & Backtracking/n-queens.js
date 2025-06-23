function placeQueens(n) {
  let answer = [];
  let board = [];

  function safe(row, col) {
    for (let r = 0; r < row; r++) {
      let c = board[r];
      if (c === col || Math.abs(c - col) === row - r) return false;
    }
    return true;
  }

  function go(row) {
    if (row === n) {
      answer.push([...board]);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (safe(row, col)) {
        board[row] = col;
        go(row + 1);
      }
    }
  }

  go(0);
  return answer;
}

console.log(placeQueens(4));
console.log(placeQueens(1));