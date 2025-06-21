// Palindromic Substring Counter

function countPS(s) {
    const n = s.length;
    let res = 0;

    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            res++;
        }
    }

    for (let gap = 2; gap < n; gap++) {
        for (let i = 0; i < n - gap; i++) {
            const j = i + gap;

            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                res++;
            }
        }
    }

    return res;
}

console.log(countPS("aabbbcccca"));
console.log(countPS("abcabc"));