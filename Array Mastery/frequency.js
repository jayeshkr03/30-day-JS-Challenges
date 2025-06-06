const frequency = (arr, item) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            count++;
        }
    }
    return count;
}

let exampleArray = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let frequencyCount = frequency(exampleArray, 'apple');
console.log("Frequency of 1 in the array:", frequencyCount);