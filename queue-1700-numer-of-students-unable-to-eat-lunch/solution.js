/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

var countStudents = function (students, sandwiches) {
  let count = 0;
  while (sandwiches.length > 0) {
    let stu = students.at(0);
    if (stu === sandwiches.at(0)) {
      sandwiches.shift();
      students.shift();
      count = 0;
    } else {
      students.shift();
      students.push(stu);
      count++;
      if (count > sandwiches.length) return sandwiches.length;
    }
  }
  return 0;
};

// Solution 2. Implement Queue
// Time O(n); Space O(n)
// class ListNode {
//     constructor (val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// class CustomQueue {
//     constructor() {
//         this.left = null;
//         this.right = null;
//     }

//     enqueue(val) {
//         let newNode = new ListNode(val);
//         if(this.right) { // If queue is not empty
//             this.right.next = newNode;
//             this.right = newNode;
//         } else {
//             this.left = newNode;
//             this.right = newNode;
//         }
//     }

//     dequeue() {
//         if(!this.left) {
//             return
//         }

//         let val = this.left;
//         if(this.left === this.right) {
//             this.left = this.right = null;
//         } else {
//             this.left = this.left.next;
//         }

//         return val;
//     }
// }
// var countStudents = function(students, sandwiches) {
// students 1 -> 1 -> 0 -> 0
// sandwiches [0, 1, 0, 1]

//  Enqueue students
//    let studentQueue = new CustomQueue();
//    let i = 0
//     while(i < students.length) {
//         studentQueue.enqueue(students[i]);
//         i++;
//     }

//     let count = 0;
//     while (sandwiches.length > 0) {
//         let stu = studentQueue.dequeue();
//         if(stu.val === sandwiches.at(0)) {
//             sandwiches.shift(); // The shift() method has similar behavior to pop(), but applied to the first element in an array.
//             count = 0;
//         } else {
//             studentQueue.enqueue(stu.val);
//             count++;
//         }
//         if (count > sandwiches.length) {
//             return sandwiches.length;
//         }
//     }
//     return 0;
// };
