// largest common subsequence

function longestCommonSubsequence(text1, text2) {
  let m = text1.length;
  let n = text2.length;

  let arr = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
      }
    }
  }

  return arr[m][n];
}

console.log(longestCommonSubsequence("abcde", "ace")); 
console.log(longestCommonSubsequence("AGGTAB", "GXTXAYB"));