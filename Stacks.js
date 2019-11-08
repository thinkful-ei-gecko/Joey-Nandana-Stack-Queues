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
    return "this stack is empty";
  }
  let top = st.top;
  while (top.next !== null) {
    console.log(top.data);
  }
}

const starTrek = new Stack();
starTrek.push("Krik");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");
//console.log(peek(starTrek));
// console.log(isEmpty(starTrek));
// starTrek.pop('McCoy');
//  console.log(display(starTrek));

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let st = new Stack();
  let revStr = "";
  for (let i = 0; i < s.length; i++) {
    st.push(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    revStr = revStr + st.pop();
  }
  if (revStr === s) {
    return true;
  }
  return false;
}
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));
function parentheses(exp) {
  let st = new Stack();
  let check = null;
  if (exp[0] !== "(") {
    return "missing opening parentheses";
  }
  for (let i = 0; i < exp.length; i++) {
    st.push(exp[i]);
  }
  for (let i = 0; i < exp.length; i++) {
    if (
      (exp[i] === "(" && st.pop() === ")") ||
      (exp[i] === ")" && st.pop() === "(")
    ) {
      check = true;
    } else {
      return "parentheses is missing";
    }
  }
  return check;
}
// console.log(parentheses('(((()))('));

//st  2,6,3,5,1
function sortStack(st) {
  let temp; //2
  let tempSt = new Stack();
  while (!isEmpty(st)) {
    temp = st.pop();
    while (!isEmpty(tempSt) && peek(tempSt) < temp) {
      st.push(tempSt.pop());
    }
    tempSt.push(temp);
  }
  // while(!isEmpty(tempSt)){
  //   st.push(tempSt.pop())
  // }
  return tempSt;
}

let stackNum = new Stack();
stackNum.push(5);
stackNum.push(3);
stackNum.push(6);
stackNum.push(2);
console.log(JSON.stringify(stackNum));
console.log('****',JSON.stringify(sortStack(stackNum)));
