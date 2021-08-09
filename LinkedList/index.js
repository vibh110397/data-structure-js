const { LinkedList } = require("./LinkedList");

function main() {
  let list = new LinkedList();
  list.insert(1);
  list.insert(2);
  list.append(3);
  list.inserAfter(list.head.next, 4);
  list.printList();
  console.log("--------");
  console.log(list.search(list.head, 1));
  console.log("--------");
  list.deleteNode(4);
  list.printList();
  console.log("--------");
  list.deleteNodeAtPosition(0);
  list.printList();
  console.log("--------");
  console.log(list.getCount(), "Count");
  console.log("--------");
  list.deleteList();
  list.printList();
  console.log("--------");
}

main();
