// remove nth node from the end of the linked list

function merge(a, b) {
  let d = new Node(0), c = d;
  while (a && b) {
    if (a.val < b.val) c.next = a, a = a.next;
    else c.next = b, b = b.next;
    c = c.next;
  }
  c.next = a || b;
  return d.next;
}

function Node(v, n = null) {
  this.val = v;
  this.next = n;
}

let l1 = new Node(1, new Node(3, new Node(5)));
let l2 = new Node(2, new Node(4, new Node(6)));
let r = merge(l1, l2);
while (r) console.log(r.val), r = r.next;
