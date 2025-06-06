// checking if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("Racecar"));
console.log(isPalindrome('wow'))