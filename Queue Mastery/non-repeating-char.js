// first non-repeating char stream 

function firstNonRepeating(s) {
    let ans = '';
    let n = s.length;
    let freq = {};

    for (let i = 0; i < n; i++) {
        freq[s[i]] = (freq[s[i]] || 0) + 1;

        let found = false;
        for (let j = 0; j <= i; j++) {
            if (freq[s[j]] === 1) {
                ans += s[j];
                found = true;
                break;
            }
        }
        if (!found) {
            ans += '#';
        }
    }
    return ans;
}

let s = "aaabbbbccccc123456789101112131415";
let ans = firstNonRepeating(s);
console.log(ans);