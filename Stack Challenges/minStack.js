class specialStack {
    constructor() {
        this.s = [];
        this.minStack = [];
    }
    push(x) {
        this.s.push(x);
        if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(x);
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1]);
        }
    }
    pop() {
        if (this.s.length === 0) {
            return -1;
        }
        const poppedElement = this.s.pop();
        this.minStack.pop();
        return poppedElement;
    }
    peek() {
        if (this.s.length === 0) {
            return -1;
        }
        return this.s[this.s.length - 1];
    }
    isEmpty() {
        return this.s.length === 0;
    }
    getMin() {
        if (this.minStack.length === 0) {
            return -1;
        }
        return this.minStack[this.minStack.length - 1];
    }
}

const stack = new specialStack();

stack.push(18);
stack.push(19);
stack.push(29);
stack.push(15);
stack.push(16);

console.log(stack.getMin());