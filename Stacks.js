class _Node{
  constructor(data,next){
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
}

function peek(st){
  return st.top;
}

function isEmpty(st){
  if (st.top == null){
    return true;
  }
  return false;
}

function display(st){
  return st;
}

const starTrek = new Stack();
starTrek.push('Krik');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
//console.log(peek(starTrek));
console.log(isEmpty(starTrek));
starTrek.pop('McCoy');
console.log(JSON.stringify(display(starTrek)));
