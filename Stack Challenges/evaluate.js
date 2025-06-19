function evaluatePostfix(expression) {
    const stack = [];
    const tokens = expression.split(' '); 

    for (const token of tokens) {
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            let result;
            switch (token) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                default:
                    throw new Error('Invalid operator: ' + token);
            }
            stack.push(result); 
        }
    }

    if (stack.length !== 1) {
        throw new Error('Invalid postfix expression'); 
    }

    return stack.pop();
}

const expression1 = "2 3 + 5 *"; 
const expression2 = "10 2 / 3 -";

console.log(evaluatePostfix(expression1)); 
console.log(evaluatePostfix(expression2)); 