// valid parenthesis

function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char]) {
            stack.push(char);
        } else { 
            if (stack.length === 0) {
                return false;
            }
            const lastOpen = stack.pop();
            if (map[lastOpen] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const example = "{}[]()";
console.log (isValid(example));