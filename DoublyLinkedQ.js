class _Node {
  constructor(value, next, prev) {
    (this.value = value), (this.next = next), (this.prev = prev);
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueueFirst(data) {
    let newNode = new _Node(data, null, this.last);
    if (this.last !== null) {
      this.last.next = newNode;
    }
    this.last = newNode;
    if (this.first === null) {
      this.first = newNode;
    }
  }
  enqueueLast(data) {
    let newNode = new _Node(data, this.first, null);
    if (this.first !== null) {
      this.first.prev = newNode;
    }
    this.first = newNode;
    if (this.last === null) {
      this.last = newNode;
    }
  }
}
function peek(list) {
  return list.first.value;
}

function displayList(list) {
  let currNode = list.first;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}
const starTrekQ = new Queue();

starTrekQ.enqueueFirst('Spock');
starTrekQ.enqueueFirst('Uhura');
starTrekQ.enqueueFirst('Sulu');
starTrekQ.enqueueLast('Kirk');
starTrekQ.enqueueFirst('Checkov');
console.log(displayList(starTrekQ));
console.log(peek(starTrekQ));
