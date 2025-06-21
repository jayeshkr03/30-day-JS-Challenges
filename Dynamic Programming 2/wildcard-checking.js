// Wildcard Checking 

function wildCard(txt, pat) {
    const n = txt.length;
    const m = pat.length;

    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

    dp[0][0] = true;

    for (let j = 1; j <= m; j++)
        if (pat[j - 1] === '*')
            dp[0][j] = dp[0][j - 1];

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (pat[j - 1] === txt[i - 1] || pat[j - 1] === '?') {
                
                dp[i][j] = dp[i - 1][j - 1];
            } 
            
            else if (pat[j - 1] === '*') {
              
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }

    return dp[n][m];
}

const txt = "abcde";
const pat = "a*de";
console.log(wildCard(txt, pat) ? "true" : "false");