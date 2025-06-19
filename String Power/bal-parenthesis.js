// Balanced parenthesis checker
function isBalanced(str) {
    const stack = []; // Stack to keep track of opening brackets
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of str) {
        if (pairs[char]) {
            stack.push(char); // Push opening bracket
        } else if (Object.values(pairs).includes(char)) {
            // If closing bracket, check for matching opening
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false; // Not balanced
            }
        }
    }

    return stack.length === 0; // True if all brackets matched
}

console.log(isBalanced("()"));
console.log(isBalanced("(]"));

// Output: 
// true
// false