// word break to check segmented word is in the longer string 

function wordBreak(string, dictionary) {
    const n = string.length;
    const arr = new Array(n + 1).fill(false);
    arr[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j in arr) {
            const subString = string.slice(parseInt(j), i);
            arr[i] = arr[j] && dictionary.includes(
                subString) ? true : arr[i];
        }
    }

    return arr[n];
}

const dictionary = ["Sandeep", "Prasad"];
const inputString = "SandeepPrasad";
const result = wordBreak(inputString, dictionary);
console.log(result);