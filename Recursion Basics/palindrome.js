// Checking Palindrome using Recursion

function checkPalindrome(s, i) {
    if (i > s.length / 2) { return true; }
    return s[i] == s[s.length - i - 1] && checkPalindrome(s, i + 1)
}

let str = "madam";
let ans = checkPalindrome(str, 0);
if (ans == true) {
    console.log("Yes,it is palindrome");
}
else {
    console.log("No,it is not palindrome");
}

// Output: 
// Yes, it is a plaindrome