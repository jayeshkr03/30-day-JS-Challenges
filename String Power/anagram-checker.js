function isAnagram(str1, str2) {
    const cleanedStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const cleanedStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

    if (cleanedStr1.length !== cleanedStr2.length) {
        return false;
    }

    const charCount = {};

    for (const char of cleanedStr1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of cleanedStr2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--; 
    }

    return true;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world")); 