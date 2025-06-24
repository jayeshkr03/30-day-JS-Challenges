// check odd or even (bit)

function isOddOrEven(nummy) {
    if (nummy & 1) {
        return "odd"
    } else {
        return "even"
    }
}

console.log(isOddOrEven(42))
console.log(isOddOrEven(77))
