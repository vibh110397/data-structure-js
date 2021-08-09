const { Node } = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  printList() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  append(data) {
    let newNode = new Node(data);

    if (this.head == null) {
      head = newNode;
      return;
    }

    newNode.next = null;

    let last = this.head;
    while (last.next != null) {
      last = last.next;
    }

    last.next = newNode;
    return;
  }

  inserAfter(prevNode, data) {
    if (prevNode == null) {
      return;
    }

    let newNode = new Node(data);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  deleteNode(key) {
    let temp = this.head;
    let prev = null;

    if (temp != null && temp.data == key) {
      this.head = temp.next;
      return;
    }

    while (temp != null && temp.data != key) {
      prev = temp;
      temp = temp.next;
    }

    if (temp == null) {
      return;
    }
    prev.next = temp.next;
  }

  deleteNodeAtPosition(position) {
    if (this.head == null) return;
    var temp = this.head;
    if (position == 0) {
      this.head = temp.next;
      return;
    }
    for (let i = 0; temp != null && i < position - 1; i++) temp = temp.next;
    if (temp == null || temp.next == null) return;
    var next = temp.next.next;
    temp.next = next;
  }

  deleteList() {
    this.head = null;
  }

  getCount() {
    let temp = this.head;
    let count = 0;
    while (temp != null) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  search(llist, key) {
    // console.log('search',llist)
    if (llist == null) return false;

    if (llist.data == key) return true;

    return this.search(llist.next, key);
  }
}

module.exports = { LinkedList };
