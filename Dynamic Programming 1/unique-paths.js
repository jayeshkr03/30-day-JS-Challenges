// unique paths in grid

function uniquePaths(m, n) {
  let arr = [];

  for (let i = 0; i < m; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      }
    }
  }

  return arr[m - 1][n - 1];
}

console.log(uniquePaths(2, 3));
console.log(uniquePaths(4, 5));
console.log(uniquePaths(3, 3));