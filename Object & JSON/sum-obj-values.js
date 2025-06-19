//Sum of object values

const myObject = {
  value1: 10,
  value2: 20,
  value3: 30,
};

const sumOfValues = Object.values(myObject).reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); 

console.log(sumOfValues); 