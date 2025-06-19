//simple interest calculator
function calculateSimpleInterest(principal, rate, time) {
    if (principal <= 0 || rate <= 0 || time <= 0) {
        throw new Error('Principal, rate, and time must be greater than zero'); // validate inputs
    }
    return (principal * rate * time) / 100; // calculate simple interest using the formula SI = (P×R×T) ÷ 100
}
console.log("Simple Interest for Principal 1000, Rate 5%, Time 2 years:", calculateSimpleInterest(1000, 5, 2));
console.log("Simple Interest for Principal 1500, Rate 3.5%, Time 4 years:", calculateSimpleInterest(1500, 3.5, 4));