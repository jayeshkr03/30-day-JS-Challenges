// double ended queue (Deque)

const deque = [];

deque.unshift(10);
deque.push(20);
deque.unshift(5);
deque.push(30);

console.log("Deque after insertions:", deque);

const frontElement = deque.shift();
const backElement = deque.pop();

console.log("Removed front element:", frontElement);
console.log("Removed back element:", backElement);
console.log("Deque after deletions:", deque);