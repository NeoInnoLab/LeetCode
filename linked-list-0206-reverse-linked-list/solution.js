/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // Solution 1.
  // Stack works while reversing to linked list.
  // let stack = [];
  // let curr = head;
  // while (curr) {
  //   stack.push(curr.val);
  //   curr = curr.next;
  // }
  // let res = new ListNode();
  // let tail = res;
  // while (stack.length > 0) {
  //   let temp = stack.at(-1);
  //   let tempNode = new ListNode(temp);
  //   tail.next = tempNode;
  //   tail = tail.next;
  //   stack.pop();
  // }
  // return res.next;

  // Solution 2.  ListNode Beats 67.35%; Time O(1); Space O(1)
  // Add optional chaining to access the parater in function scope')

  // let curr = head;
  // let next = null;
  // let reverse = null;
  // while(curr) { // [1,2,3,4,5], curr = [2,3,4,5]
  //     next = curr.next // next = [3,4,5]
  //     let temp = reverse; // temp = [1]
  //     reverse = curr; // reverse = [2,3,4,5]
  //     reverse.next = temp; [2,3,4,5] -> [2, 1]
  //     curr = next; // curr = [3,4,5]
  // }
  // return reverse;

  // Solution 3. - ListNode Time O(1); Space O(1)
  let [reverse, curr, next] = [null, head, null];
  while (curr) {
    // [1,2,3,4,5], curr = [3,4,5], reverse = [2,1]
    next = curr.next; // [4,5]
    curr.next = reverse; // curr.next = [2,1], curr = [3,2,1]

    reverse = curr; // [3,2,1]
    curr = next; // [4,5]
  }
  return reverse;
};
