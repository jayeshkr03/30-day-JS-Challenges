// add numbers as list

function add(a, b) {
  let d = new Node(0), c = d, carry = 0;
  while (a || b || carry) {
    let sum = (a?.val || 0) + (b?.val || 0) + carry;
    c.next = new Node(sum % 10);
    carry = Math.floor(sum / 10);
    c = c.next;
    a = a?.next;
    b = b?.next;
  }
  return d.next;
}

function Node(v, n = null) {
  this.val = v;
  this.next = n;
}

let l1 = new Node(2, new Node(4, new Node(3)));
let l2 = new Node(5, new Node(6, new Node(4)));
let r = add(l1, l2);
while (r) console.log(r.val), r = r.next;
// Output: 7 0 8
