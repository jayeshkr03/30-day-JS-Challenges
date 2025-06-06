function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome('hello'));
console.log(isPalindrome('wow'));
console.log(isPalindrome(12321));