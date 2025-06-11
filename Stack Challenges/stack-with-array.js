// Stack with array

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}

const myStack = new Stack();
console.log(myStack.isEmpty());

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.size());
console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.peek());

myStack.clear();
console.log(myStack.isEmpty());
console.log(myStack.pop());

