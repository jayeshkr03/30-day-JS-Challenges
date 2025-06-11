//  circular queue

class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = new Array(capacity).fill(null);
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full. Cannot enqueue.");
      return false;
    }

    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = element;
    this.size++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Cannot dequeue.");
      return null;
    }

    const removedElement = this.queue[this.front];
    this.queue[this.front] = null;

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
    this.size--;
    return removedElement;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return null;
    }
    return this.queue[this.front];
  }

  printQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return;
    }
    let str = "";
    let i = this.front;
    let count = 0;
    while (count < this.size) {
      str += this.queue[i] + " ";
      i = (i + 1) % this.capacity;
      count++;
    }
    console.log(str.trim());
  }
}

const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.printQueue();

cq.dequeue();
cq.printQueue();

cq.enqueue(40);
cq.enqueue(50);
cq.enqueue(60);
cq.printQueue();