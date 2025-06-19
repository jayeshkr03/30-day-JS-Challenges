// Function to sort an array of strings in alphabetical order
export function alphabeticSort(arr) {
    // Use the sort method with a custom compare function
    return arr.sort((a, b) => {
        if (a < b) {
            return -1; // a comes before b
        }
        if (a > b) {
            return 1; // a comes after b
        }
        return 0; // a and b are equal
    });
}

// Example usage
const stringArray = ["banana", "apple", "orange", "grape"];
console.log("Sorted array: ", alphabeticSort(stringArray));

// Output: Sorted array:  [ 'apple', 'banana', 'grape', 'orange' ]

