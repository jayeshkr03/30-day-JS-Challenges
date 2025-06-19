// infix to postfix conversion

function infixToPostfix(infixExpression) {
    let postfix = "";
    const operatorStack = [];
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    function isOperand(char) {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');
    }

    function getPrecedence(operator) {
        return precedence[operator] || 0;
    }

    for (let i = 0; i < infixExpression.length; i++) {
        const char = infixExpression[i];

        if (isOperand(char)) {
            postfix += char;
        } else if (char === '(') {
            operatorStack.push(char);
        } else if (char === ')') {
            while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
                postfix += operatorStack.pop();
            }
            operatorStack.pop();
        } else {
            while (
                operatorStack.length > 0 &&
                operatorStack[operatorStack.length - 1] !== '(' &&
                getPrecedence(char) <= getPrecedence(operatorStack[operatorStack.length - 1])
            ) {
                postfix += operatorStack.pop();
            }
            operatorStack.push(char);
        }
    }

    while (operatorStack.length > 0) {
        postfix += operatorStack.pop();
    }

    return postfix;
}