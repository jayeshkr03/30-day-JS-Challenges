function isBalanced(str) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of str) {
        if (pairs[char]) {
            stack.push(char);
        } else if (Object.values(pairs).includes(char)) {
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("()"));
console.log(isBalanced("(]"));

