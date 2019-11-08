class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  length() {
    return this.top;
  }
}

function peek(st) {
  return st.top;
}

function isEmpty(st) {
  if (st.top == null) {
    return true;
  }
  return false;
}

function display(st) {
  if (st.top === null) {
    return 'this stack is empty';
  }
  let top = st.top;
  while (top.next !== null) {
    console.log(top.data);
  }
}

let Stack1 = new Stack();
let Stack2 = new Stack();


function Enqueue(element) {
  Stack1.push(element);
}

// implement dequeue method by pushing all elements
// from stack 1 into stack 2, which reverses the order
// and then popping from stack 2
function Dequeue() {
  if (!isEmpty(Stack1)){
    return 'Queue is empty';
  }
    
  while (!isEmpty(Stack1)) {
    var p = Stack1.pop();
    Stack2.push(p);
  }
  
  return Stack2.pop();
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
Dequeue(); 
  
console.log(Stack1);

console.log(Dequeue());
console.log(Stack2)