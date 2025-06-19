// swap keys and values 

const originalObject = {
  name: "Alice",
  age: 30,
  city: "New York"
};

const swappedObject = Object.fromEntries(
  Object.entries(originalObject).map(([key, value]) => [value, key])
);

console.log(swappedObject);
