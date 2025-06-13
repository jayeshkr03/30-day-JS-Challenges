// palindrome check in lists
function isPalin(head) {
  let slow = head, fast = head, prev = null;
  while (fast && fast.next) fast = fast.next.next, [slow.next, prev, slow] = [prev, slow, slow.next];
  if (fast) slow = slow.next;
  while (slow && prev && slow.val === prev.val) slow = slow.next, prev = prev.next;
  return !slow && !prev;
}

function Node(v, n = null) {
  this.val = v;
  this.next = n;
}

let list = new Node(1, new Node(2, new Node(2, new Node(1))));
console.log(isPalin(list)); // true
