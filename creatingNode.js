console.log('hry');

class LinkedList {
  constructor() {
    this.head = null; // Start with an empty list
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head; // Properly link the new node to the existing head
    this.head = newNode; // Update the head to the new node
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }
  getHead() {
    const firstNode = this.head;
    return firstNode;
  }
  tail() {
    if (!this.head) {
      return null;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  }
  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }
  pop() {
    const size = this.size();
    if (!this.head) return;
    else {
      let current = this.head;
      if (size === 1) {
        this.head = null;
      } else if (size === 2) {
        current.nextNode = null;
      } else {
        for (let index = 0; index < size - 2; index++) {
          current = current.nextNode;
        }
        current.nextNode = null;
      }
    }
  }
  contains(value) {
    let current = this.head;
    while (current.nextNode) {
      if (current.value === value) return true;
      else current = current.nextNode;
    }
    if (current.value === value) return true;
    return false;
  }
  find(value) {
    let answer = null;
    const size = this.size();
    if (!this.head) return answer;
    let current = this.head;
    for (let index = 0; index < size; index++) {
      if (current.value === value) {
        answer = index;
        return answer;
      } else {
        current = current.nextNode;
      }
    }
    return answer;
  }
  toString() {
    const size = this.size();
    let current = this.head;
    let string;
    while (current) {
      string += `( ${current} ) -> `;
      current = current.nextNode;
    }
    string += `null`;
    console.log(string);
  }
  insertAt(value, index) {
    const newNode = new Node(value);
    const size = this.size();
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }
    let postNode = this.head;
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    if (current === null) {
      console.log('Error: Index out of bounds');
      return;
    }

    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }
  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1 && current != null; i++) {
      current = current.nextNode;
    }
    if (current === null) {
      console.log('Error: Index out of bounds');
      return;
    }
    if (current.nextNode === null) {
      this.pop();
    }
    current.nextNode = current.nextNode.nextNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
