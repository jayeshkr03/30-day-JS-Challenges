// Anagram checker
function isAnagram(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const cleanedStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // If lengths differ, not anagrams
    if (cleanedStr1.length !== cleanedStr2.length) {
        return false;
    }

    const charCount = {}; // Object to count characters in str1

    // Count each character in cleanedStr1
    for (const char of cleanedStr1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract count for each character in cleanedStr2
    for (const char of cleanedStr2) {
        if (!charCount[char]) {
            return false; // Character not found or count mismatch
        }
        charCount[char]--; 
    }

    return true; // All counts matched
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

// Output: 
// true
// false