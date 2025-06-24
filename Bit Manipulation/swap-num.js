// swap two numbers 

function swapNum(a, b) {
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return [a, b]
}

console.log(swapNum(5, 9))
console.log(swapNum(123, 456))
