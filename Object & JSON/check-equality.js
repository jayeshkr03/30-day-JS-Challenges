// Check objects equality 

function Person(name) {
this.name = name;
}
Person.prototype.sayHello = function() {
console.log(`Hello, I'm ${this.name}`);
};

const john = new Person('John');
console.log('name' in john);
console.log('sayHello' in john);