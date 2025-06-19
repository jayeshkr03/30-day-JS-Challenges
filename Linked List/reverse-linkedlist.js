// Reverse linked list using recursion

function reverse(head) {
  let prev = null;
  while (head) {
    [head.next, prev, head] = [prev, head, head.next];
  }
  return prev;
}

// Example usage:
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
let list = new ListNode(1, new ListNode(2, new ListNode(3)));
let reversed = reverse(list);
while (reversed) {
  console.log(reversed.val);
  reversed = reversed.next;
}
