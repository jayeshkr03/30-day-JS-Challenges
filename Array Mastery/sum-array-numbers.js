function sumArrayNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;
}

let myArray = [1, 2, 3, 4, 5];
let total = sumArrayNumbers(myArray);
console.log("Sum of array numbers:", total);