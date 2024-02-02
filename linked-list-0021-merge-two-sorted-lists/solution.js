/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // Eg. list1=[1,2,4], list2 = [1,3,4]
  // Output: [1,1,2,3,4,4]
  let head = new ListNode(); // A Dummy node to keep track of the head of the merged list
  let tail = head; // Pointer to the tail of the merged list
  let curr1 = list1;
  let curr2 = list2;

  while (curr1 || curr2) {
    if (curr1?.val <= curr2?.val || (!curr2 && curr1)) {
      tail.next = curr1;
      curr1 = curr1.next;
    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    }
    tail = tail.next; // Notice that we're moving "tail" to the next node
  }
  return head.next;
};
