function objectSort(arr, key) {
    // Sort array of objects by the given key
    return arr.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1; // a comes before b
        }
        if (a[key] > b[key]) {
            return 1; // a comes after b
        }
        return 0; // equal values
    });
}

const people = [
    { name: "Paratham", age: 30 },
    { name: "Bhavyam", age: 25 },
    { name: "Tirth", age: 35 }
];

console.log("Sorted by age:");
console.table(objectSort(people, "age")); // Sort by age
console.log("Sorted by name:");
console.table(objectSort(people, "name")); // Sort by name

// Output:

// Sorted by age:
// ┌─────────┬────────────┬─────┐
// │ (index) │ name       │ age │
// ├─────────┼────────────┼─────┤
// │ 0       │ 'Bhavyam'  │ 25  │
// │ 1       │ 'Paratham' │ 30  │
// │ 2       │ 'Tirth'    │ 35  │
// └─────────┴────────────┴─────┘
// Sorted by name:
// ┌─────────┬────────────┬─────┐
// │ (index) │ name       │ age │
// ├─────────┼────────────┼─────┤
// │ 0       │ 'Bhavyam'  │ 25  │
// │ 1       │ 'Paratham' │ 30  │
// │ 2       │ 'Tirth'    │ 35  │
// └─────────┴────────────┴─────┘