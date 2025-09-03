class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let tail = current;
    while (current.next) {
      tail = current;
      current = current.next;
    }
    this.tail = tail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;

    let i = 0;
    let current = this.head;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current;
  }

  set(index, val) {
    let node = this.get(index);

    if (!node) false;

    console.log(node);
    node.val = val;

    return node;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index == 0) {
      this.unshift(val);
      return true;
    }

    if (index == this.length) {
      this.push(val);
      return true;
    }

    let node = new Node(val);

    let node_at_index = this.get(index);
    let prev_node = this.get(index - 1);

    node.next = node_at_index;
    prev_node.next = node;
    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;

    if (index == 0) {
      this.shift();
      return true;
    }

    if (index == this.length - 1) {
      this.pop();
      return true;
    }

    let prev = this.get(index - 1);
    let remove_node = prev.next;
    prev.next = remove_node.next;
    this.length--;

    return this;
  }
}

const linklist = new SinglyLinkList();
linklist.push(1);
linklist.push(2);
linklist.push(3);
linklist.push(4);
