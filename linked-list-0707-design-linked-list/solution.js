// Runtime beats 99.25%;
// Time O(1) while operating head & tail node ; O(n) during traversal
// Space O(1)

class DoublyListNode {
  constructor(val = -1, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}
var MyLinkedList = function () {
  this.head = new DoublyListNode();
  this.tail = this.head;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) return -1;
  let curr = this.head.next;
  let i = 0;
  while (i++ < index && curr.next) {
    curr = curr.next;
  }
  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new DoublyListNode(val, this.head); // create a newNode which its prev point to the head
  this.length++;
  if (this.length === 1) {
    // If it's only the first node, move tail node to the node
    this.tail = newNode;
    this.tail.next = newNode; // For traversal, always give tail.next a value while the linked list is not empty.
  } else {
    // If not only, then "head.next" exist", and no worry to the tail node
    newNode.next = this.head.next;
    this.head.next.prev = newNode;
    this.head.next = newNode;
  }
  this.head.next = newNode;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.length === 0) {
    this.addAtHead(val);
  } else {
    let newNode = new DoublyListNode(val, this.tail); // create a newNode which its prev point to the tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.next = newNode;
    this.length++;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index >= 0 && index <= this.length) {
    if (index === 0) {
      this.addAtHead(val);
    } else if (index === this.length) {
      this.addAtTail(val);
    } else {
      let curr = this.head.next;
      let i = 0;
      while (i++ < index && curr.next) {
        curr = curr.next;
      }
      let newNode = new DoublyListNode(val, curr.prev, curr); // insert before current
      curr.prev.next = newNode;
      curr.prev = newNode;
      this.length++;
    }
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= 0 && index < this.length) {
    if (index === 0 && this.length === 1) {
      // if only one node, delete head.next, move tail to head
      this.head.next = null;
      this.tail = this.head;
      this.tail.next = null;
      console.log("delete - only 1");
    } else if (index === this.length - 1) {
      // delete tail
      this.tail = this.tail.prev;
      this.tail.next = this.tail;
    } else {
      let curr = this.head.next;
      let i = 0;
      while (i++ < index && curr.next) {
        curr = curr.next;
      }
      curr.next.prev = curr.prev;
      curr.prev.next = curr.next;
    }
    this.length--;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
