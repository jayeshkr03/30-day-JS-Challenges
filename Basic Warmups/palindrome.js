// Function to check if a number or string is a palindrome
function isPalindrome(num) {
    const str = num.toString(); // Convert number to string
    const reversedStr = str.split('').reverse().join(''); // Reverse the string
    return str === reversedStr; // Check if original string is equal to reversed string
}
console.log(isPalindrome('hello'));
console.log(isPalindrome('wow'));
console.log(isPalindrome(12321));

// Output:
// false
// true
// true