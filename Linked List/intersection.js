// internsection of lists 

function intersect(a, b) {
  let s = new Set();
  while (a) s.add(a), a = a.next;
  while (b) {
    if (s.has(b)) return b;
    b = b.next;
  }
  return null;
}

function Node(v, n = null) {
  this.val = v;
  this.next = n;
}

let common = new Node(8, new Node(9));
let l1 = new Node(1, new Node(2, common));
let l2 = new Node(3, common);
console.log(intersect(l1, l2).val); // 8
