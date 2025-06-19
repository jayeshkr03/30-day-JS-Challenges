function areBracketsBalanced(str) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (bracketMap[char]) { 
            stack.push(char);
        } else if (Object.values(bracketMap).includes(char)) {
            if (stack.length === 0) {
                return false; 
            }
            const lastOpenBracket = stack.pop();
            if (bracketMap[lastOpenBracket] !== char) {
                return false; 
            }
        }
    }

    return stack.length === 0;
}

console.log(areBracketsBalanced("()[]{}"));
console.log(areBracketsBalanced("({[})"));
